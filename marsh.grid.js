angular.module('marsh.grid', [])
  .controller('gridCtrl', function($scope, $window) {
  $scope.events = [
    {
      src: 'http://placekitten.com/250/160',
      title: 'Title',
      color: '#314428',
      date_month: 'July',
      date_day: '1'
    }, {
      title: 'Be There',
      color: '#d75404',
      date_month: 'April',
      date_day: '1'
    }, {
      src: 'http://lorempixel.com/240/170',
      title: 'Another Event',
      color: '#3e4858',
      date_month: 'June',
      date_day: '1'
    }, {
      title: 'Event coming up',
      color: '#f09905',
      date_month: 'July',
      date_day: '1'
    }, {
      src: 'http://placekitten.com/230/150',
      title: 'Events',
      color: '#c18136',
      date_month: 'July',
      date_day: '1'
    }, {
      title: 'Come one Come All',
      color: '#709a11',
      date_month: 'May',
      date_day: '1'
    }, {
      src: 'http://placekitten.com/300/150',
      title: 'lets do this',
      color: '#314428',
      date_month: 'June',
      date_day: '1'
    }, {
      src: 'http://lorempixel.com/230/150',
      title: 'Something',
      color: '#3e4858',
      date_month: 'July',
      date_day: '1'
    }, {
      src: 'http://placekitten.com/210/150',
      title: 'Another Event',
      color: '#f09905',
      date_month: 'June',
      date_day: '1'
    }, {
      src: '',
      title: 'Event coming up',
      color: '#314428',
      date_month: 'May',
      date_day: '1'
    }, {
      src: 'http://lorempixel.com/320/150',
      title: 'Group B',
      color: '#d75404',
      date_month: 'July',
      date_day: '1'
    }, {
      src: 'http://placekitten.com/230/150',
      title: 'Come one Come All',
      color: '#314428',
      date_month: 'June',
      date_day: '1'
    }, {
      title: 'lets do this',
      color: '#314428',
      date_month: 'July',
      date_day: '1'
    }, {
      src: 'http://lorempixel.com/255/150',
      title: 'Title',
      color: '#d75404',
      date_month: 'July',
      date_day: '1'
    }, {
      title: 'Something',
      color: '#314428',
      date_month: 'May',
      date_day: '1'
    }, {
      src: 'http://placekitten.com/290/150',
      title: 'Another Event',
      color: '#314428',
      date_month: 'December',
      date_day: '1'
    }, {
      src: 'http://lorempixel.com/230/150',
      title: 'Event coming up',
      color: '#d75404',
      date_month: 'July',
      date_day: '1'
    }, {
      src: 'http://placekitten.com/266/150',
      title: 'Group B',
      color: '#314428',
      date_month: 'August',
      date_day: '1'
    }, {
      title: 'Be There',
      color: '#d75404',
      date_month: 'April',
      date_day: '1'
    }, {
      src: 'http://lorempixel.com/240/170',
      title: 'Another Event',
      color: '#3e4858',
      date_month: 'June',
      date_day: '1'
    }, {
      title: 'Event coming up',
      color: '#f09905',
      date_month: 'July',
      date_day: '1'
    }, {
      src: 'http://placekitten.com/230/150',
      title: 'Events',
      color: '#c18136',
      date_month: 'July',
      date_day: '1'
    }
  ];
    $scope.Resize = function() {
      return angular.element($window).bind('resize', _.debounce(function() {
        $scope.buildGrid();
        return $scope.$apply();
      },50));
    };
  return $scope.buildGrid = function() {
    var colNum, colNumClass, columnsNum, event, i, openColumn, _i, _len, _results;
    $scope.windowWidth = $window.innerWidth;
    colNum = (function() {
      switch (false) {
        case !($scope.windowWidth < 400):
          return 1;
        case !($scope.windowWidth < 700):
          return 2;
        case !($scope.windowWidth < 1000):
          return 3;
        default:
          return 4;
      }
    })();
    console.log(colNum)
    $scope.columns = [];
    columnsNum = colNum - 1;
    i = 0;
    while (i <= columnsNum) {
      this.column = [];
      this.column.count = 0;
      $scope.columns.push(this.column);
      i++;
    }
    colNumClass = colNum + 1;
    $scope.gridClass = "grid-1-" + colNum;
    openColumn = 0;
    _results = [];
    for (_i = 0, _len = $scope.events.length; _i < _len; _i++) {
      event = $scope.events[_i];
      $scope.columns.sort(function(a, b) {
        return a.count - b.count;
      });
      $scope.columns[0].push(event);
      if (event.src) {
        _results.push($scope.columns[0].count += 2);
      } else {
        _results.push($scope.columns[0].count += 1);
      }
    }
    return _results;
  };
}).directive('marshGrid', function() {
  return {
    restrict: 'AE',
    replace: true,
    template: '<div class="grid">'+
      '<div data-ng-repeat="column in columns" class="{{gridClass}} column">'+
        '<div data-ng-repeat="card in column" class="a-card">'+
          '<div ng-if="card.src" class="cardWrap">'+
            '<img src="" data-ng-src="{{card.src}}">'+
          '</div>'+
          '<div class="contWrap" style="background: {{card.color}}">'+
            '<div class="date-month">{{card.date_month}}</div>'+
            '<div class="date-day">{{card.date_day}}</div>'+
            '<p>{{card.title}}</p>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>',
    controller: 'gridCtrl',
    link: function(scope) {
      scope.buildGrid();
      return scope.Resize();
    }
  };
});