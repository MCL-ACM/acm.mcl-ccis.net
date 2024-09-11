import React from 'react';
import { graphql } from 'gatsby';
import CommitteeSection from '../components/members/CommitteeSection';
import ExecutiveSection from '../components/members/ExecutiveSection';
import MembersHero from '../components/members/MembersHero';
import Divider from '../components/common/Divider';
import Head from '../components/common/Head';
import FormerOfficersSection from '../components/members/FormerOfficersSection';
import MemberSection from '../components/members/MemberSection';

export default function members({ data }) {
  const executiveCommittee = data.executive.member;
  const allCommittees = data.committees.edges.reduce(
    (acc, { node }) => {
      acc[node.name] = {
        members: node.members.sort(),
      };
      return acc;
    },
    { 'Executive Committee': { members: executiveCommittee } },
  );

  const formerOfficersPhotos = data.photos.edges.reduce((acc, { node }) => {
    acc[node.relativePath] = node.childImageSharp;
    return acc;
  }, {});

  const formerOfficers = data.former.edges
    .map((edge) => edge.node)
    .reduce((acc, row) => {
      const { year, officers } = row;
      acc[year] = officers.map((officer) => ({
        ...officer,
        photo: formerOfficersPhotos[officer.photo],
      }));
      return acc;
    }, {});

  return (
    <div>
      <Head title='Members' />
      <MembersHero />
      <div className='flex flex-col lg:my-24 gap-20 px-5 mb-24 lg:gap-28 fixed-width'>
        <CommitteeSection allCommittees={allCommittees} />
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
            photo
          }
        }
      }
    }
    photos: allFile(filter: { sourceInstanceName: { eq: "formerPhotos" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
