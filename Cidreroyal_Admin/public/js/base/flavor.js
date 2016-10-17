/**
 * Created by gaojun on 15/12/10.
 */

'use strict';

var requestInterceptor = function (RestangularProvider) {
  // use the custom query parameters function to format the API request correctly
  RestangularProvider.addFullRequestInterceptor(function (element, operation, what, url, headers, params) {
    if (operation == "getList") {
      // custom pagination params
      //if (params._page) {
      //  params._start = (params._page - 1) * params._perPage;
      //  params._end = params._page * params._perPage;
      //}
      //delete params._page;
      //delete params._perPage;
      // custom sort params
      if (params._sortField) {
        params._sort = params._sortField;
        params._order = params._sortDir;
        delete params._sortField;
        delete params._sortDir;
      }
      // custom filters
      if (params._filters) {
        for (var filter in params._filters) {
          params[filter] = params._filters[filter];
        }
        delete params._filters;
      }
    }
    return {params: params};
  });
};

var responseInterceptor = function (RestangularProvider) {
  RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response) {
    if (operation == "getList") {
      response.totalCount = response.headers('Total_Count');
      //response.totalCount = contentRange;
    } else if (operation == "remove") {

    }
    return data;
  });
};

module.exports = {
  requestInterceptor: requestInterceptor,
  responseInterceptor: responseInterceptor,
};
