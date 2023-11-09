### Запуск backend стек Python/Django
##### Проверить что у вас установлен Python
Для пользователей Windows:
Откройте командную строку, нажав клавиши `Windows + R`, затем введите cmd и нажмите Enter.  
В командной строке введите `python --version` и нажмите Enter. Система должна показать версию Python, установленную на вашем компьютере.

Для пользователей MacOS и Linux:  
Откройте Терминал.  
В терминале введите `python3 --version` и нажмите Enter. Система должна показать версию Python, установленную на вашем компьютере.  

##### Склонировать репозиторий и перейти в директорию server `server`

##### Установка виртуального окружения
Команда для установки виртуального окружения на Mac или Linux:  
`python3 -m venv venv`  

Команда для Windows должна быть такая:  
`python -m venv venv`

##### Активация виртуального окружения
В Windows:  
выполнить инструкции из файла activate во вложенной папке venv/Scripts командой  
`source venv/Scripts/activate`  

В macOS или Linux:  
выполнить инструкции из файла activate во вложенной папке venv/bin командой  
`source venv/bin/activate`  

##### Установка зависимостей проекта 
`pip install -r requirements.txt`  

Cоздать `.env` файл в переменных среды окружения в директории `server`  
Пример (указать свой ключ):  
`SECRET_KEY=django-insecure-1m54x^a+)_6b)w1o6+k+13w68xn(u^7k57a72ul85r7aqtn(c3`  

##### Запуск миграци
`python manage.py migrate`  

##### Создание пользователя
`python3 manage.py createsuperuser`  
Необходимо указать данные для доступа в административный интерфейс Django  

##### Запуск сервера
`python manage.py runserver`  

##### Документация:
`http://localhost:8000/api/v1/swagger/`  

##### Тестовый эндпоинт для порверки взаимодействия
`http://localhost:8000/api/v1/test`  

##### Административный интерфейс Django
`http://localhost:8000/admin`  

