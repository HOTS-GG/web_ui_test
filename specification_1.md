# BE &rarr; FE ��
> ```json
> {
>     "problems": [
>        {//������
>             "title": "������ ������ �ɴϴ�. type: string",
>             "type": "������ Ÿ���� �ɴϴ�. type: string",
>             "selections": [
>                 {
>                     "s1": "���� 1��, type: string",
>                     "s2": "���� 2��, type: string",
>                     "s3": "���� 3��, type: string",
>                     "s4": "���� 4��, type: string",
>                     "s5": "���� 5��, type: string",
>                 }
>             ],
>             "answer": "������ ���� �ɴϴ�. type: int"
>        },
>        {//�ְ���
>             "title": "������ ������ �ɴϴ�. type: string",
>             "type": "������ Ÿ���� �ɴϴ�. type: string",
>             "answer": "������ ���� �ɴϴ�. type: int"
>        },
>        {//OX
>             "title": "������ ������ �ɴϴ�. type: string",
>             "type": "������ Ÿ���� �ɴϴ�. type: string",
>             "answer": "������ ���� �ɴϴ�. type: boolean"
>        }
>     ]
> }
> ```
> * �������� 5�������Դϴ�.
> * ������ ������ type�� choiceQ�Դϴ�.
> * �ְ��� ������ type�� subjectiveQ�Դϴ�.
> * OX ������ type�� doubleQ�Դϴ�.
> * `answer`�� ������ �ϳ��Դϴ�.

# FE &rarr; BE ��
> ```json
> {
>     "request":[
>         {
>             "problemNum": "�� ������ �����Դϴ�. type: int",
>             "choiceQ": "������ Ÿ���� �ɴϴ�. type: boolean",
>             "subjectiveQ": "������ Ÿ���� �ɴϴ�. type: boolean",
>             "doubleQ": "������ Ÿ���� �ɴϴ�. type: boolean",
>             "difficulty": "������ ���̵��� �ɴϴ�. type: string",
>             //"image": "���� �̹��� ����, type: image"
>         }
>     ]
> }
> ```
> 
> * �� ������ ���� 30���� �����Դϴ�.
> * `difficulty`: easy, normal, hard