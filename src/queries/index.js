import { gql } from "apollo-boost";

export const GET_ALL_DATA_GIHUB = gql`
  query($login: String!, $totalRepos: Int!) {
    user(login: $login) {
      name
      avatarUrl
      repositories(privacy: PUBLIC, first: $totalRepos) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          defaultBranchRef {
            name
            target {
              ... on Commit {
                pushedDate
                history {
                  totalCount
                  nodes {
                    additions
                    deletions
                  }
                }
              }
            }
          }
          name
          primaryLanguage {
            color
            name
          }
        }
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }
  }
`;

export const GET_ALL_REPO_PAGINATION_GIHUB = gql`
  query($cursor: String, $login: String!, $prev: String, $limit: Int) {
    user(login: $login) {
      name
      repositories(
        privacy: PUBLIC
        first: $limit
        after: $cursor
        before: $prev
      ) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        nodes {
          defaultBranchRef {
            name
            target {
              ... on Commit {
                history {
                  totalCount
                  nodes {
                    additions
                    deletions
                  }
                }
              }
            }
          }
          name
          primaryLanguage {
            color
            name
          }
          languages(first: 5) {
            nodes {
              name
              color
            }
          }
          collaborators(first: 5) {
            nodes {
              name
              login
              email
            }
          }
        }
      }
    }
  }
`;
