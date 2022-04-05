//@ts-ignore
window.dashApp = `
from dash import Dash, dcc, html

app = Dash(__name__)

app.layout = html.Div([
    dcc.Dropdown(['New York City', 'Montal', 'San Francisco'], 'Montal', multi=True)
])

if __name__ == '__main__':
    app.run_server(debug=True)
`;
