//@ts-ignore
window.dashApp = `
from dash import Dash, dcc, html
from dash.dependencies import Input, Output
import pandas as pd


import micropip
micropip.install('PyDrive')

#import datasheets
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive


# This is not used in WebDash
# if __name__ == '__main__':
#     app.run_server(debug=True)
`;
