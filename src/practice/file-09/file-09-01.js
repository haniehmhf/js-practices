/*
Apply following CSS rules to the list items, take the target as follows :
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>


1) li:nth-of-type(1) {
  border:1px solid red
}

1
2
3
4
5

answer1 = 1

2) li:nth-of-type(n) {
  border:1px solid red
}

1
2
3
4
5

answer2 = 1,2,3,4,5

3) li:nth-child(2n) {
  border:1px solid red
}

1
2
3
4
5

answer3 = 2,4 

4) li + li {
    border:1px solid black
}

1
2
3
4
5

anwer4 = 2,3,4,5


5) li:not(:last-child) {
  border:1px solid red
}

1
2
3
4
5

answer5 = 1,2,3,4

6) li:first-of-type ~ li {
  border:1px solid red
}

1
2
3
4
5

answer6 = 2,3,4,5

7) li:nth-child(3n) + li {
  border:1px solid red
}

1
2
3
4
5

answer7 = 4

8) li:nth-child(2) ~ li {
  border:1px solid red
}

1
2
3
4
5

answer8 = 3,4,5

9) li:not(:nth-child(2n+1)) {
  border:1px solid red
}

1
2
3
4
5

answer9 = 2,4

10) li:nth-last-child(2) {
  border:1px solid red
}

1
2
3
4
5

answer10 = 4

11) li:nth-child(-n+4) {
  border:1px solid red
}

1
2
3
4
5

answer11 = 1,2,3,4 

12) li:nth-last-child(-n+3) {
  border:1px solid red
}

1
2
3
4
5

answer12 = 3,4,5

13) li:nth-of-type(odd) + li {
  border:1px solid red
}

1
2
3
4
5

answer13 = 2,4

14) li:nth-of-type(2n+1) ~ li:not(:last-child) {
  border:1px solid red
}

1
2
3
4
5

answer14 = 2,3,4

15) li+li~li+li:not(:nth-of-type(2n+1)) {
  border:1px solid red
}

1
2
3
4
5

answer15 = 4

 */