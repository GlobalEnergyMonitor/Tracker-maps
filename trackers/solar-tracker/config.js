var config = {
    csv: 'solar-data.csv',
    color: {
        field: 'Status',
        values: {
            //update this list
            'operating': 'red',
            'construction': 'blue',
            'pre-construction': 'green',
            'announced': 'green',
            'shelved': 'grey',
            'mothballed': 'grey',
            'retired': 'grey',
            'cancelled': 'grey'
        }
    },
    filters: [
        {
            field: 'Status',
            /* values need to be specified for ordering */
            values: ['operating','construction','pre-construction','announced','shelved','mothballed','retired','cancelled']
        },
        {
            field: 'Technology Type',
            values: ['PV','Assumed PV','Solar Thermal']
        }
    ],
    capacityField: 'Capacity (MW)',
    capacityLabel: 'Capacity (MW)',
    assetFullLabel: 'Solar Farm Phases',
    assetLabel: 'Phase Name',
    nameField: 'Project Name',
    tableHeaders: {
        values: ['Wiki URL','Project Name','Phase Name','Project Name in Local Language / Script','Technology Type', 'Capacity (MW)','Status', 'Start year', 'Operator', 'Owner', 'Country'],
        labels: ['Wiki URL', 'Project Name','Phase Name','Project Name in Local Language / Script','Technology Type','Capacity (MW)' ,'Status','Start year','Operator', 'Owner','Country'],
        clickColumn: 'Wiki URL'
    },
    searchFields: { 'Project': ['Project Name'], 
        'Companies': ['Owner', 'Operator'],
        'Start Year': ['Start Year']
    },
    img_detail_zoom: 13,
    detailView: {
        'Project Name': {'display': 'heading'},
        'Project Name in Local Language / Script': {},
        'Owner': {'label': 'Owner'},
        'Operator': {'label': 'Operator'},
        'Technology Type': {'display': 'join', 'label': ['Type', 'Types']},
        'Start Year': {'display': 'range', 'label': ['Start Year', 'Start Year Range']},
        'accuracy': {'display': 'join', 'label': ['Accuracy','Accuracy']},
        'Country': {'display': 'location'}
    },
    showAllPhases: true
}