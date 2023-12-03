cd backend
./venv/bin/activate
after entering the venv :
sudo apt install python3 --fix-missing
sudo apt install pip --fix-missing
pip install -r requirements.txt
uvicorn main:app --reload
this will host the python server
