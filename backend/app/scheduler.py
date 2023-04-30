from apscheduler.schedulers.background import BackgroundScheduler
from app.comparison import check_for_changes

def start_scheduler():
    scheduler = BackgroundScheduler()
    scheduler.add_job(check_for_changes, 'interval', hours=6)
    scheduler.start()