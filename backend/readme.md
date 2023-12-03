cd backend

# 1.

## On Windows

python -m venv venv

## On macOS or Linux

python3 -m venv venv

# 2.

## On Windows

rmdir /s venv

## On macOS or Linux

rm -rf venv

# 3.

## Recreate the virtual environment

python -m venv venv

# 4.

## On Windows

venv\Scripts\activate

## On macOS or Linux

source venv/bin/activate

# 5.

## after entering the venv :

pip install fastapi uvicorn
pip install -r requirements.txt
uvicorn main:app --reload

this will host the python server
