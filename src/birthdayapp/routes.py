from birthdayapp import app
from flask import render_template, make_response, request, redirect

@app.route('/birthday')
def index():
    """Route for birthday.html.
    """
    response = make_response(app.send_static_file('birthday.html'))
    return response
