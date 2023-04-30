import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def send_change_email(email, url):
    message = Mail(
    from_email='gavin.sidhu@uplevelhq.com',
    to_emails=email,
    subject='There was a change on one of your tracked webpages',
    html_content=f"<p>There was a change detected on the following page: {url}</p>")
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e.message)

