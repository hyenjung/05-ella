/**
 *  ! A 알고리즘
 *  * 1. 1부터 45까지의 숫자중 원하는 번호를 생성한다 - ㅡMath.random()
 *  * 2. 추출된 번호를 lotto 배열에 넣는다 중복되면 안된다.
 *  * 3. 6개의 번호가 추출되면  .result-wrap에 공을 만들어 넣는다.
 * 
 *  ! B 알고리즘
 *  *  1. 1~45까지의 번호가 존재하는 배열이 있다.
 *  *  1. numbers에서 6개의 번호를 추출하여 lotto배열에 넣는다
 *  *  1. 6개의 배열이 추출되면 result에 공을 넣는다.
 * 
 *
 *  ? 다 만들면 booldook@gmail.com으로 폴더 전체를 압축하여 보낸다.
 */


function onLucky() {
    var numbers =[];
    var lottoP = [];
    var lotto = [];

    for(var i=1;i<=45;i++) {
      numbers.push(i);
      lottoP.push(Math.ceil(Math.random() * (44)) + 1);
        $.each(lottoP,function(i,value){
         if(lotto.indexOf(value) == -1 ) lotto.push(value);
         });

        for(var j=0;j<6;j++) {
            $(".result-wrap .number").eq(j).empty().append(lotto[j]);
            if(lotto[j]<=10){
                $(".result-wrap .number").eq(j).css({'background-color':"rgb(127, 187, 153)"});
            }else if(lotto[j]<=20){
                $(".result-wrap .number").eq(j).css({'background-color':"rgb(199, 189, 81)"});
            }else if(lotto[j]<=30){
                $(".result-wrap .number").eq(j).css({'background-color':"rgb(148, 54, 62)"});
            }else if(lotto[j]<=40){
                $(".result-wrap .number").eq(j).css({'background-color':"rgb(62, 81, 189)"});
            }else {
                $(".result-wrap .number").eq(j).css({'background-color':"rgb(88, 88, 88)"});
            }
            }
        }

    }
    
   
$("#btLucky").click(onLucky);
