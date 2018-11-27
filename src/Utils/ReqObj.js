 const ReqObj = {
  "from": 0,
  "size": 700,
  "query": {
    "bool": {
      "must": [{
        "multi_match": {
          "query": "",
          "fields": [
            "label",
            "labelNo",
            "chapterTitle",
            "chapterNo",
            "term",
            "type",
            "definition",
            "pageTitle",
            "content",
            "title",
            "tag",
            "authoredText"
          ],
          "type": "phrase_prefix",
          "max_expansions": 1000
        }
      }],
      "filter": [{
        "terms": {
          "indexId.raw": [
            "a9866c5e-28a4-422f-bf2d-2dc6a9b3a103"
          ]
        }
      }],
      "adjust_pure_negative": true
    }
  },
  "_source": {
    "includes": [
      "pageUrn",
      "pageUrl",
      "figureType",
      "label",
      "labelNo",
      "chapterTitle",
      "chapterNo",
      "sortNo",
      "itemId",
      "term",
      "definition",
      "authoredText",
      "path",
      "pageTitle",
      "title",
      "srcPath",
      "type"
    ],
    "excludes": []
  },
  "sort": [{
    "sortNo": {
      "order": "asc"
    },
    "_score": {
      "order": "desc"
    }
  }],
  "highlight": {
    "require_field_match": false,
    "fragment_size": 0,
    "type": "unified",
    "fields": {
      "label": {},
      "labelNo": {},
      "chapterTitle": {},
      "chapterNo": {},
      "term": {},
      "definition": {},
      "pageTitle": {},
      "content": {},
      "authoredText": {}
    }
  }
};

export default ReqObj;