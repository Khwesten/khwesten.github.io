$(document).ready(function () {
    $('#container').highcharts({
        exporting: { enabled: false },
        chart: {
            type: (screen.width < 800) ? 'bar' : 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'PHP', 'Java', 'Node.js', 'Python', 'C#', 'Symfony2/Laravel/CI', 'SLIM/Jersey (framework)',
                'Doctrine/Hibernate (framework)', 'SMART template',
                'HTML5', 'CSS3', 'JS / jQuery', 'Knockout.js', 'AngularJS',
				'Android', 'Ionic',
                'Oracle/MySql/Postgress', 'Mongo/Dynamo',
                'CorelDRAW', 'PhotoShop', 'Blender'
            ]
        },
        yAxis: {
            title: {
                text: 'Level'
            },
            plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
                name: 'BACK',
                data: [9.0, 8.5, 7.5, 6.0, 4.0, 7.0, 8.0, 9.0, 7.0]
            }, {
                name: 'FRONT',
                data: [null, null, null, null, null, null, null, null, null, 8.0, 8.5, 8.5, 8.5, 8.0]
            }, {
				name: 'MOBILE',
                data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 7.0, 8.0]
            }, {
                name: 'DB',
                data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 8.0, 7.0]
            }, {
                name: 'Design',
                data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 9.0, 7.5, 6.0]
            }]
    });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});