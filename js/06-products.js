$.get('../json/06-products.json' ,ConProducts);

function genStar(v) {
    for(var i=2;
        i<=5;i++){
        html = '<i class="fa fa-star"></i>';
        html += '<i class="fa fa-star-half active"></i>'; 
    }
}

function ConProducts(r) {
    console.log(r);
    for(var i=0,html=' ';i<r.length;i++) {
        html = '<div class="wrap">';
        html += '<div class="img-wrap">';
        html += '<img src="'+r[i].src+'" alt="'+r[i].title+'">';
        html += '</div>'
        html += '<div class="info-wrap">'
        html += '<div class="title">'+r[i].title+'</div>'
        html += '<div class="heart"><i class="far fa-heart"></i></div>'
        html += '<div class="summary">'+r[i].summary+'</div>';
        html += '<div class="price">'+r[i].price+'.00'+'</div>'
        html += '<div class="star">'
        for(var j=0;j<5;j++){
            if(r[i].star == 0) {
                html += '<i class="fa fa-star"></i>'; 
            }else if (r[i].star >= j) {
                 if(r[i].star >= j+0.3 && r[i].star <= j+0.7){
                html += '<i class="fa fa-star-half active"></i>'; 
                }else {
                html += '<i class="fa fa-star active"></i>'; 
                }
             }
    }
        html += '</div>'
        html += '</div>'
        html += '</div>'
        $(".wrapper").append(html);
    }
}