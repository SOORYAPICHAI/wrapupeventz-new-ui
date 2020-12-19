 
Пример инклуда :

@@include('post-preview.html',{
    "img-src":"img/users/5.png",
    "title":"Some forum title",
    "last-update":"Updated on January 7, 2016 in",
    "category":"Ideas",
    "comment-count":"20",
    "like-count":"24",
    "wide":"",
    "private":"",
    "name":"",
    "postHeader":""
})

"img-src" - картинка юзера
"title": - заголовок поста
"last-update": - когда обновлен 
"category": - категория  , есть сейчас 6 вариантов : JobPosting GettingStarted Question Feature Ideas , или пустой - елси пустой , пишет просто                    category, и зеленая иконка
"comment-count":"20",
"like-count":"24",
"wide": - добавляет класс brk-forum-preview_wide (это те превью что идут уже внизу , с рамкой при ховере) , значение либо true либо пустая строка
"private": - добавляет значек , что пост приватный , значение либо true либо пустая строка
"name": - это уже класс для forum-post модуля , в превью добавляется имя - значение либо строка (имя) либо пустая строка 
"postHeader": - тоже класс дял forum-post модуля , значение либо true либо пустая строка
         