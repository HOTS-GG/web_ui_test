# BE &rarr; FE 명세
> ```json
> {
>     "problems": [
>        {//객관식
>             "title": "문제의 지문이 옵니다. type: string",
>             "type": "문제의 타입이 옵니다. type: string",
>             "selections": [
>                 {
>                     "s1": "보기 1번, type: string",
>                     "s2": "보기 2번, type: string",
>                     "s3": "보기 3번, type: string",
>                     "s4": "보기 4번, type: string",
>                     "s5": "보기 5번, type: string",
>                 }
>             ],
>             "answer": "문제의 답이 옵니다. type: int"
>        },
>        {//주관식
>             "title": "문제의 지문이 옵니다. type: string",
>             "type": "문제의 타입이 옵니다. type: string",
>             "answer": "문제의 답이 옵니다. type: int"
>        },
>        {//OX
>             "title": "문제의 지문이 옵니다. type: string",
>             "type": "문제의 타입이 옵니다. type: string",
>             "answer": "문제의 답이 옵니다. type: boolean"
>        }
>     ]
> }
> ```
> * 객관식은 5지선다입니다.
> * 객관식 문제의 type은 choiceQ입니다.
> * 주관식 문제의 type은 subjectiveQ입니다.
> * OX 문제의 type은 doubleQ입니다.
> * `answer`는 언제나 하나입니다.

# FE &rarr; BE 명세
> ```json
> {
>     "request":[
>         {
>             "problemNum": "총 문제의 갯수입니다. type: int",
>             "choiceQ": "문제의 타입이 옵니다. type: boolean",
>             "subjectiveQ": "문제의 타입이 옵니다. type: boolean",
>             "doubleQ": "문제의 타입이 옵니다. type: boolean",
>             "difficulty": "문제의 난이도가 옵니다. type: string",
>             //"image": "문제 이미지 전송, type: image"
>         }
>     ]
> }
> ```
> 
> * 총 문제의 수는 30문제 제한입니다.
> * `difficulty`: easy, normal, hard