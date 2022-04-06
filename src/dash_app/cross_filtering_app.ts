//@ts-ignore
window.dashApp = `
from dash import Dash, dcc, html
from dash.dependencies import Input, Output
import pandas as pd




import micropip
await micropip.install('pygsheets')
import pygsheets

#import datasheets


# This is not used in WebDash
# if __name__ == '__main__':
#     app.run_server(debug=True)
`;
