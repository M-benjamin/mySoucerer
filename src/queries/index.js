import { gql } from "apollo-boost";

export const GET_ALL_DATA_GIHUB = gql`
  query {
    user(login: "M-benjamin") {
      avatarUrl
      name
      repositories(first: 100) {
        totalCount
        nodes {
          languages(first: 100) {
            nodes {
              name
            }
          }
          nameWithOwner
          defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          }
        }
      }

      following {
        totalCount
      }

      followers {
        totalCount
      }
    }
  }
`;
