export const GET_DESKS_QUERY = `query {
    desks {
      id
      sid
      name
      slug
      seo
      order
      open_access
      desk {
        id
        sid
        name
        slug
        seo
        order
        open_access
        articles_count
        draft_articles_count
        published_articles_count
        total_articles_count
      }
      desks {
        id
        sid
        name
        slug
        seo
        order
        open_access
        articles_count
        draft_articles_count
        published_articles_count
        total_articles_count
      }
      layout {
        id
        name
        template
        data
      }
      metafields {
        id
        key
        type
        name
        description
      }
      articles_count
      draft_articles_count
      published_articles_count
      total_articles_count
    }
  }
  `;

export const GET_ARTICLES_QUERY = `query (
        $desk: ID
        $published: Boolean
        $unscheduled: Boolean
        $scheduledRange: DateRange
        $sortBy: [QueryArticlesSortByOrderByClause!]
        $first: Int
        $page: Int
      ) {
        articles(
          desk: $desk
          published: $published
          unscheduled: $unscheduled
          scheduledRange: $scheduledRange
          sortBy: $sortBy
          first: $first
          page: $page
        ) {
          paginatorInfo {
            count
            currentPage
            firstItem
            hasMorePages
            lastItem
            lastPage
            perPage
            total
          }
          data {
            id
            sid
            shadow_authors
            title
            slug
            pathnames
            blurb
            order
            featured
            publish_type
            document
            html
            plaintext
            cover
            seo
            auto_posting
            plan
            newsletter
            newsletter_at
            encryption_key
            draft
            scheduled
            published
            published_at
            created_at
            updated_at
            desk {
              id
              sid
              name
              slug
              seo
              order
              open_access
            }
            layout {
              id
              name
              template
              data
            }
            stage {
              id
              name
              color
              icon
              order
              ready
              default
            }
            authors {
              id
              intercom_hash_identity
              email
              verified
              status
              suspended
              first_name
              last_name
              full_name
              slug
              avatar
              location
              bio
              website
              socials
              signed_up_source
              last_seen_at
              created_at
              updated_at
              meta
              role
            }
            tags {
              id
              sid
              name
              slug
              description
              count
            }
            threads {
              id
              article_id
              position
              created_at
              updated_at
              resolved_at
            }
            relevances {
              id
              sid
              shadow_authors
              title
              slug
              pathnames
              blurb
              order
              featured
              publish_type
              document
              html
              plaintext
              cover
              seo
              auto_posting
              plan
              newsletter
              newsletter_at
              encryption_key
              draft
              scheduled
              published
              published_at
              created_at
              updated_at
            }
            metafields {
              id
              key
              type
              name
              description
            }
            content_blocks {
              id
              key
              type
              name
              description
            }
          }
        }
      }`;

export const GET_ARTICLE_QUERY = `
      query ($id: ID, $sid: ID, $slug: String) {
        article(id: $id, sid: $sid, slug: $slug) {
          id
          sid
          shadow_authors
          title
          slug
          pathnames
          blurb
          order
          featured
          publish_type
          document
          html
          plaintext
          cover
          seo
          auto_posting
          plan
          newsletter
          newsletter_at
          encryption_key
          draft
          scheduled
          published
          published_at
          created_at
          updated_at
          desk {
            id
            sid
            name
            slug
            seo
            order
            open_access
          }
          layout {
            id
            name
            template
            data
          }
          stage {
            id
            name
            color
            icon
            order
            ready
            default
          }
          authors {
            id
            intercom_hash_identity
            email
            verified
            status
            suspended
            first_name
            last_name
            full_name
            slug
            avatar
            location
            bio
            website
            socials
            signed_up_source
            last_seen_at
            created_at
            updated_at
            meta
            role
          }
          tags {
            id
            sid
            name
            slug
            description
            count
          }
          threads {
            id
            article_id
            position
            created_at
            updated_at
            resolved_at
          }
          relevances {
            id
            sid
            shadow_authors
            title
            slug
            pathnames
            blurb
            order
            featured
            publish_type
            document
            html
            plaintext
            cover
            seo
            auto_posting
            plan
            newsletter
            newsletter_at
            encryption_key
            draft
            scheduled
            published
            published_at
            created_at
            updated_at
          }
          metafields {
            id
            key
            type
            name
            description
          }
          content_blocks {
            id
            key
            type
            name
            description
          }
        }
      }
    `;
