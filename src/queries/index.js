import { gql } from "apollo-boost";

export const GET_ALL_DATA_GIHUB = gql`
  query {
    user(login: "M-benjamin") {
      name
      avatarUrl
      repositories(privacy: PUBLIC, first: 50) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          # object(oid: $oid, expression: "master:") {
          #   ... on Tree {
          #     oid
          #     entries{
          #       mode
          #       name
          #       oid
          #       type
          #     }
          #   }
          # }
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
