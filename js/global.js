$(document).ready(function () {
    $('#container').highcharts({
        exporting: { enabled: false },
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['PHP', 'Java', 'Python', 'C#', 'Symfony2', 'SLIM/Jersey (framework)', 'Doctrine/Hibernate (framework)',
                'SMART template', 'HTML5', 'CSS3', 'JS / jQuery', 'Knockout.js', 'AngularJS',
				'Android', 'Ionic',
                'Oracle', 'MySql', 'Postgress', 'CorelDRAW', 'PhotoShop', 'Blender']
        },
        yAxis: {
            title: {
                text: 'Nível'
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
                data: [9.0, 8.5, 6.0, 4.0, 7.0, 8.0, 9.0, 7.0]
            }, {
                name: 'FRONT',
                data: [null, null, null, null, null, null, null, null, 8.0, 8.5, 8.5, 8.5, 8.0]
            }, {
				name: 'MOBILE',
                data: [null, null, null, null, null, null, null, null, null, null, null, null, null, 7.0, 8.0]
            }, {
                name: 'DB',
                data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 6.0, 8.0, 6.0]
            }, {
                name: 'Design',
                data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 9.0, 7.5, 6.0]
            }]
    });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});