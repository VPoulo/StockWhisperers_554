import schedule
import time
import subprocess

def job():
    subprocess.run('powershell ls;python -c "print(1235)"')


if __name__ == "__main__":
    schedule.every(5).seconds.do(job)

    while True:
        schedule.run_pending()
        time.sleep(1)