//@ts-ignore
window.dashApp = `
from dash import Dash, dcc, html
from dash.dependencies import Input, Output
import pandas as pd


import micropip
micropip.install('pygsheets')


import pygsheets
gc = pygsheets.authorize(service_file='client_secrets.json')
sh = gc.open_by_key('1tuKjiWVKWb4S_kA8aJYy3Bg1eOQDTHKb5-ZkkBSSCbI')
worksheet1 = sh.worksheet('title', 'Hoja 1')
sheetData = worksheet1.get_all_records()
DFMetadata = pd.DataFrame(sheetData)
print(DFMetadata)

app = Dash(__name__)

app.layout = html.Div([
    dcc.Dropdown(['New York City', 'Montal', 'San Francisco'], 'Montal', multi=True),
    dcc.Textarea(
        id='textarea-example',
        value="Textarea content initialized with multiple lines of text",
        style={'width': '100%', 'height': 100},
    ),
    html.Div(id='textarea-example-output', style={'whiteSpace': 'pre-line'})
])

@app.callback(
    Output('textarea-example-output', 'children'),
    Input('textarea-example', 'value')
)
def update_output(value):
    worksheet1.append_table(values=[value])
    return 'You have entered: {}'.format(value)



# This is not used in WebDash
# if __name__ == '__main__':
#     app.run_server(debug=True)
`;
