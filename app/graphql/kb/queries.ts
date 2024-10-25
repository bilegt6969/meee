import { gql } from '@apollo/client';

const articleDetail = gql`
  query kbArticleDetail($id: String!) {
    knowledgeBaseArticleDetail(_id: $id) {
      _id
      title
      summary
      content
      createdUser {
        _id
        username
        details {
          avatar
          fullName
        }
      }
      forms {
        brandId
        formId
        __typename
      }
      attachments {
        url
      }
      image {
        url
      }
      createdDate
    }
  }
`;

const articles = gql`
  query ($page: Int, $perPage: Int, $categoryIds: [String]) {
    knowledgeBaseArticles(
      page: $page
      perPage: $perPage
      categoryIds: $categoryIds
    ) {
      _id
      title
      summary
      content
      forms {
        brandId
        formId
        __typename
      }
      createdUser {
        _id
        username
        details {
          avatar
          fullName
        }
      }
      attachments {
        url
      }
      image {
        url
      }
      createdDate
    }
  }
`;

const kbCategoryId = gql`
  query knowledgeBaseCategoryId($_id: String!) {
    knowledgeBaseCategoryDetail(_id: $_id) {
      _id
    }
  }
`;

const articleDetails = gql`query KnowledgeBaseArticles($page: Int, $perPage: Int, $categoryIds: [String]) {
  knowledgeBaseArticles(page: $page, perPage: $perPage, categoryIds: $categoryIds) {
    _id
    code
    title
    summary
    content
    status
    categoryId
    attachments {
      name
      url
      type
      size
      duration
      __typename
    }
    image {
      name
      url
      type
      size
      __typename
    }
    createdDate
    modifiedBy
    modifiedDate
    scheduledDate
    forms {
      brandId
      formId
      __typename
    }
    publishedUserId
    publishedUser {
      _id
      username
      email
      details {
        avatar
        fullName
        __typename
      }
      __typename
    }
    __typename
  }
}`

const queries = {
  articleDetail,
  articles,
  kbCategoryId,
  articleDetails
};

export default queries;