import axios from '../../node_modules/axios';
import ReqObj from './ReqObj';


export default class Utilities {

  static getSearchResults(query) {
    let searchReqObj = ReqObj;
    searchReqObj.query.bool.must[0].multi_match.query = query;
    return (axios.post("http://10.169.180.154:9200/citechapterindex_19-09-2018,citeglossaryindex_18-09-2018,citefigureindex_18-09-2018/_search",     
        JSON.stringify(searchReqObj),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then(response => {
      if (response && response.data) {
        return Promise.resolve(response.data);
      }
    }))
  }

  static map(data) {
    const types = {'citeglossaryindex':'glossary','citefigureindex':'figure', 'citechapterindex':'chapter'};
    const resultObj = {
      glossary: [],
      chapter: [],
      figure: [],

    };

    const getType = (indx) => {
      for (let i in types) {
        if (indx.indexOf(i) > -1) {
          return types[i];
        }
      }
    }
    data.hits.hits.forEach((item, index) => {
      const itemIndex = item._index;
      const type = getType(itemIndex);
      if (type) {
        resultObj[type].push(item);
      }
    })
    resultObj.took = data.took;
    resultObj.total = data.hits.total;
  return resultObj;
     
  }
} //End class