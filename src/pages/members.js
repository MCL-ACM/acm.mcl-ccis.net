import React from 'react';
import { graphql } from 'gatsby';
import CommitteeSection from '../components/members/CommitteeSection';
import ExecutiveSection from '../components/members/ExecutiveSection';
import MembersHeader from '../components/members/MembersHeader';

export default function members({ data }) {
  const executiveCommittee = data.executive.member;
  const committees = data.committees.edges.map(({ node }) => ({
    ...node,
    members: node.members.sort(),
  }));

  return (
    <div>
      <MembersHeader />
      <div className='flex flex-col gap-20 px-5 mb-24 lg:gap-28 fixed-width'>
        <ExecutiveSection officers={executiveCommittee} />
        {committees.map((committee) => (
          <CommitteeSection
            name={committee.name}
            chair={committee.chair}
            members={committee.members}
          />
        ))}
      </div>
    </div>
  );
}

export const query = graphql`
  query GetMembers {
    executive: executive {
      member {
        name
        position
        photo {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    committees: allCommittee(sort: { fields: name, order: ASC }) {
      edges {
        node {
          name
          chair {
            name
            position
            photo {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          members
        }
      }
    }
  }
`;
