import axios from '../../node_modules/axios';
// import * as youtubeSearch from 'youtube-search';
import querystring from 'querystring';
import ReqObj from './ReqObj';

let CancelToken;
let source;

export default class Utilities {
  static getSearchResults(query, indexObj) {
    let searchReqObj = ReqObj;
    const postUrl = "http://10.83.116.19:9200/citechapterindex,citeglossaryindex,citefigureindex,citepageindex,citelearningobjectiveindex,citevideoindex/_search?size=150";
    searchReqObj.query.bool.must[0].multi_match.query = query;
    searchReqObj.query.bool.filter[0].terms['indexId.raw'].pop();
    searchReqObj.query.bool.filter[0].terms['indexId.raw'].push(indexObj.id);

    if (source) {
      source.cancel();
    } 
    CancelToken = axios.CancelToken;
    source = CancelToken.source();

    let requestObj = axios.post(postUrl,     
      JSON.stringify(searchReqObj),
      {
        headers: {
          'Content-Type': 'application/json'
        },
        cancelToken: source.token
      }).catch(function(thrown) {
      if (axios.isCancel(thrown)) {
        // console.log('Request canceled', thrown.message);
      } else {
        console.log("Error in Ajax");
      }
    })
    .then(response => {
      if (response && response.data) {
        console.log('Search results ', response.data);
        return Promise.resolve(response.data);
      }
    });
    return requestObj;
  }

  static getWikiResults(q) {
    // const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=${q}`;
     const url = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=" + q;
    let wikiPromise = new Promise((resolve, reject) => {
      return axios.get(url).then((resp) => {
        console.log('resp from wiki', resp);
        return resolve(resp.data.query.search);
      }).catch((error) => {
        reject(error);
        console.log(error);
      });
    });
    return wikiPromise;
  }

  static getYoutubeResults(q) {
    const youtubeId = 'AIzaSyBNZ-0cGVhWXR-DStlvAk53X_GXpb90wrA';
    const options = {
        q,
        part:'snippet',
        type:'video',
        key: youtubeId,
        maxResults: 5
      }
    /*let YoutubePromise = youtubeSearch(youtubeId, options).then((resp) => {
        console.log('resp from youtube', resp);
        if (resp && resp.items && resp.items.length) {
          return (resp.items.length > 5 ? resp.items.slice(0, 4) : resp.items);
        }
      }).catch((error) => {
        return (error);
      });*/
      let YoutubePromise = axios.get('https://www.googleapis.com/youtube/v3/search?' + querystring.stringify(options))
    .then(function (resp) {
        if (resp && resp.data && resp.data.items.length) {
          console.log('resp from youtube', resp);
          return resp.data.items;
        }
    }).catch((error) =>{
      console.log(error);
    })
  
    return YoutubePromise;
  }

  static getCiteSearchTypes() {
    return ['glossary', 'figure', 'chapter','page', 'learningObjective', 'video']
  }

  static map(data) {
    const types = {
      'citeglossaryindex':'glossary',
      'citefigureindex':'figure',
      'citechapterindex':'chapter',
      'citepageindex':'page',
      'citelearningobjectiveindex': 'learningObjective',
      'citevideoindex': 'video'
    };
    const resultObj = {
      glossary: [],
      chapter: [],
      learningObjective: [],
      figure: [],
      video: [],
      page: []
    };

    const getType = (indx) => {
      for (let i in types) {
        if (indx.indexOf(i) > -1) {
          return types[i];
        }
      }
    }

    if (data && data.hits.hits) {
      data.hits.hits.forEach((item, index) => {
        // const itemIndex = item._index;
        // const type = getType(itemIndex);
       //  if (type) {
          resultObj[item._source.type].push(item);
       // }
      })
      resultObj.took = data.took;
      resultObj.total = data.hits.total;
    }
    return resultObj;
  }
} //End class