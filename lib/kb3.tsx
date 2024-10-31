import { cache, ReactNode } from "react";
import { getClient } from "./ssClient";
import { queries } from "../app/graphql/kb";
import type { QueryOptions } from "@apollo/client";

const token = process.env.NEXT_PUBLIC_ERXES_APP_TOKEN;

// Add error handling for missing token
if (!token) {
  console.warn('NEXT_PUBLIC_ERXES_APP_TOKEN is not set in environment variables');
}

export interface CommonParams {
  variables?: QueryOptions["variables"];
}

export type GetKbArticleDetail = (params?: CommonParams) => Promise<{
  error_msg: string | undefined;
  article3: IArticle3 | null;
}>;

export const getKbArticleDetail3: GetKbArticleDetail = cache(async (params) => {
  const { data, error } = await getClient().query({
    query: queries.articleDetail,
    variables: params?.variables,
    context: {
      headers: {
        "erxes-app-token": token,
      },
    },
  });

  // Add error handling
  if (error) {
    console.error('GraphQL Error:', error);
    return {
      article3: null,
      error_msg: error.message,
    };
  }

  const { knowledgeBaseArticleDetail: article3 } = data || {};

  return {
    article3,
    error_msg: undefined,
  };
});

export const getKbArticlesByCode3: GetKbArticles = cache(
  async (code, params) => {
    try {
      const kbCat = await getClient().query({
        query: queries.kbCategoryId,
        variables: { _id: code },
        context: {
          headers: {
            "erxes-app-token": token,
          },
        },
      });

      const { knowledgeBaseCategoryDetail: category } = kbCat.data || {};
      const { data, error } = await getClient().query({
        query: queries.articleDetails,
        variables: {
          ...params?.variables,
          categoryIds: [category?._id],
          perPage: 1000,
        },
        context: {
          headers: {
            "erxes-app-token": token,
          },
        },
      });

      return {
        article3: data?.knowledgeBaseArticles || [],
        error_msg: error?.message,
      };
    } catch (error: any) {
      console.error('GraphQL Error:', error);
      return {
        article3: [],
        error_msg: error?.message || 'An error occurred while fetching articles',
      };
    }
  }
);

export type GetKbArticles = (
  code?: string,
  params?: { variables?: QueryOptions["variables"] }
) => Promise<{
  error_msg: string | undefined;
  article3: IArticle3[]; // Changed from article2
}>;

export interface IArticle3 {
  [x: string]: any;
  code: ReactNode;
  _id: string;
  content: string;
  image?: IAttachment;
  attachments?: IAttachment[];
  summary?: string;
  title: string;
  form: string;
  
}

export type IAttachment = { url?: string } | null;
