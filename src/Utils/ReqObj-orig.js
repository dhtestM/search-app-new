 const ReqObj = {
      from: 0,
      size: 700,
      query: {
        bool: {
          must: [
            {
              multi_match: {
                query: '1',
                fields: [
                  'label',
                  'labelNo',
                  'chapterTitle',
                  'chapterNo',
                  'term',
                  'type',
                  'title',
                  'definition'
                ],
                type: 'phrase',
                operator: 'OR',
                slop: 0,
                prefix_length: 0,
                max_expansions: 1000,
                lenient: false,
                zero_terms_query: 'NONE',
                boost: 1
              }
            }
          ],
          disable_coord: false,
          adjust_pure_negative: true,
          boost: 1
        }
      },
      _source: {
        includes: [
          'pageUrn',
          'pageUrl',
          'figureType',
          'label',
          'labelNo',
          'chapterTitle',
          'chapterNo',
          'chapterUrn',
          'sortNo',
          'itemId',
          'term',
          'definition',
          'title'
        ],
        excludes: []
      },
      sort: [
        {
          sortNo: {
            order: 'asc'
          }
        }
      ],
      highlight: {
        require_field_match: false,
        type: 'unified',
        fields: {
          label: {},
          labelNo: {},
          chapterTitle: {},
          chapterNo: {},
          term: {},
          definition: {}
        }
      }
    };
export default ReqObj;