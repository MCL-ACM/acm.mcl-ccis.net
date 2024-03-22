import React from 'react';
import { graphql } from 'gatsby';
import CommitteeSection from '../components/members/CommitteeSection';
import ExecutiveSection from '../components/members/ExecutiveSection';
import MembersHero from '../components/members/MembersHero';
import Divider from '../components/common/Divider';
import Head from '../components/common/Head';
import FormerOfficersSection from '../components/members/FormerOfficersSection';

export default function members({ data }) {
  const executiveCommittee = data.executive.member;
  const committees = data.committees.edges.map(({ node }) => ({
    ...node,
    members: node.members.sort(),
  }));
  const formerOfficers = data.former.edges;

  return (
    <div>
      <Head title='Members' />
      <MembersHero />
      <Divider className='lg:my-24 mx-5 lg:mx-0 lg:w-11/12 lg:h-[2px] hidden lg:block' />
      <div className='flex flex-col gap-20 px-5 mb-24 lg:gap-28 fixed-width'>
        <ExecutiveSection officers={executiveCommittee} />
        {committees.map(({ name, chair, cochair, members: _members }) => (
          <CommitteeSection
            name={name}
            cochair={cochair}
            chair={chair}
            members={_members}
          />
        ))}
        <FormerOfficersSection formerOfficers={formerOfficers} />
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
            gatsbyImageData(placeholder: BLURRED)
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
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          cochair {
            name
            position
            photo {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          members {
            name
            position
            photo {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
    former: allFormer(sort: { order: DESC, fields: name }) {
      edges {
        node {
          year: name
          officers {
            name
            position
          }
        }
      }
    }
  }
`;
