// 侧边栏
$(function() {
    $(window).scroll(function() {
        var oSrcollTop = $(window).scrollTop()
            // console.log(oSrcollTop);
        if (oSrcollTop > 400) {
            $(".catetop-lift").fadeIn(100)
        } else {
            $(".catetop-lift").fadeOut(100)
        }
        var winH = $(window).height()
            // console.log(winH);
        $(".move").each(function(index) {
            // console.log($(".move"))
            if (winH + oSrcollTop - $(this).offset().top > winH / 2) {
                $(".lift-list .catetop-lift-item").removeClass("lift-item-current")
                $(".lift-list .catetop-lift-item").eq(index).addClass("lift-item-current")
            }

        })
    })

    //点击侧边栏
    $(".lift-list div:not(.lift-item-top)").click(function() {
        console.log($(".move"));
        var oH = $(".move").eq($(this).index()).offset().top
        $("body,html").animate({
            "scrollTop": oH
        }, 500)
    })
    $(".lift-item-top").click(function() {
        $("body,html").animate({
            "scrollTop": 0
        }, 300)
    })
})






$(function() {
    $(".hd>ul>li").mouseover(function() {
        var i = $(this).index()
        $(".bd>ul").eq(i).fadeIn(300)
        $(".bd>ul").eq(i).siblings().fadeOut(400)
        $(this).addClass("on")
        $(this).siblings().removeClass("on")
    })
})




$(function() {
    var oLeft = $(".tempWrap1").css("left");

    console.log(oLeft);
    console.log(parseInt(oLeft));
    $(".brand-slide a").click(function() {
        if (parseInt(oLeft) == 0) {
            $(".tempWrap .tempWrap1").animate({ left: "-1110px" }, 500, function() {
                oLeft = $(".tempWrap1").css("left")
            });

        } else {
            $(".tempWrap .tempWrap1").animate({ left: "0px" }, 500, function() {
                oLeft = $(".tempWrap1").css("left")
            })

        }
        return false
    })
})



$(function() {
    $(".tempWrap3 .next").click(function() {
        $(".tempWrap3 .tempWrap2").animate({ left: "-1200px" }, 500)
        $(".awg-hd ul li:last").addClass("on").siblings("li").removeClass("on")
        return false
    }), $(".tempWrap3 .prev-prevStop").click(function() {
        $(".tempWrap3 .tempWrap2").animate({ left: "0px" }, 500)
        $(".awg-hd ul li:first").addClass("on").siblings("li").removeClass("on")
        return false
    }), $(".awg-hd ul li").mouseover(function() {
        var i = $(this).index()
        $(this).addClass("on")
        $(this).siblings().removeClass("on")
        if ($(this).index() == 0) {
            $(".tempWrap3 .tempWrap2").animate({ left: "0px" }, 500)
            $(".tempWrap3 .tempWrap2").css("left", "0px")

        } else {

            $(".tempWrap3 .tempWrap2").animate({ left: "-1200px" }, 500)
            $(".tempWrap3 .tempWrap2").css("left", "-1200px")
        }
        $(".tempWrap3 .prev-prevStop").addClass("kk")
        $(".tempWrap3 .next").addClass("kk")
    }), $(".awg-hd ul li").mouseout(function() {
        $(".tempWrap3 .prev-prevStop").removeClass("kk")
        $(".tempWrap3 .next").removeClass("kk")
    })
    $(".tempWrap3").hover(function() {
        $(".tempWrap3 .prev-prevStop").addClass("kk")
        $(".tempWrap3 .next").addClass("kk")
    }, function() {
        $(".tempWrap3 .prev-prevStop").removeClass("kk")
        $(".tempWrap3 .next").removeClass("kk")
    })





})



// //鼠标放上去时，下面跟着移动
// var oUl = $('.bot-con ul')
// var num = $('.casual-list li').mouseover(function() {
//         var num = $(this).index()
//         var oLeft = num * 1200
//         $('.bot-con').animate({
//             left: -oLeft
//         }, 500)

//     })
//     //点击小按钮时左右移动
// $('.next').on("click", function() {
//     var num = $('.casual-list li.c-active').index()
//     num++
//     if (num >= 2) {
//         num = 2
//     }
//     var oLeft = num * 1200
//     $('.bot-con').animate({
//         left: -oLeft
//     }, 500)
//     $('.casual-list li').eq(num).addClass('c-active').siblings('li').removeClass('c-active')
// })
// $('.prev').on("click", function() {
//     var num = $('.casual-list li.c-active').index()
//     num--
//     if (num < 0) {
//         num = 0
//     }
//     var oLeft = num * 1200
// $('.bot-con').animate({
//         left: -oLeft
//     }, 500)
//     $('.casual-list li').eq(num).addClass('c-active').siblings('li').removeClass('c-active')
// })
var long = parseInt($(".eng_box_right").height()) / 24; //首先求出进度条的比例产生关系
// console.log(long);
$(".eng>a").mouseenter(function() { //首先给所以。eng下面的a标签绑定鼠标进入事件
    var index = $(this).index(); //获取他们对应的索引
    var num = -$(".eng_box ul li").eq(index)[0].offsetTop; //我首先把juqery对像转了Dom对象使用top偏移量
    // console.log(num);
    if (index == 21) { //如果到达了最后一个
        num = -$(".eng_box ul li").eq(index)[0].offsetTop + 80; //主要是考虑的让最后一个不会跑上去
    }
    $(".eng_box_left>ul").css("top", num + "px"); //设置ul的top值是负数让他动起来
    $("#right_btnhh").css("top", long * index + "px"); //开始动了
    console.log(long * index); //打印一下看看是否对
})

var nb = false; //创建一个变量，控制拖拉一会
var lang = 13.25; //创建一个变量
$("#right_btnhh").mousedown(function(e) {

    lang = 13.25; //13.25是用户ul的高度除以右边竖线的高度求出的
    e.preventDefault(); //阻止图片的默认拖拉效果
    console.log(-$(this)[0].offsetTop * lang);
    nb = true;
});
$("body").mouseup(function() {
    nb = false;
});
$(".eng_box_right").mousemove(function(e) { //移动
    if (nb) {
        if (e.pageY < 287 && e.pageY > 116) {
            $("#right_btnhh").css("top", Math.floor(e.pageY - 118));
            console.log(Math.floor(e.pageY - 118));
            $(".eng_box_left>ul").css("top", Math.floor(-Math.floor(e.pageY - 118) * lang) + "px");
            console.log(e.pageY);
        }
    }
});
$(".weizhi")[0].onmousewheel = function(e) {
    if (e.wheelDelta > 0) { //向上回去
        if ($("#right_btnhh")[0].offsetTop >= -1) {
            var text = $("#right_btnhh")[0].offsetTop -= 8;
            if (text < 0) {
                text = 0;
            }
            $("#right_btnhh").css("top", text);
            console.log(Math.floor(e.pageY - 118));
            $(".eng_box_left>ul").css("top", Math.floor(-$("#right_btnhh")[0].offsetTop * lang) + "px");
            console.log(e.pageY);
            return false;
        }
    } else { //向下
        e.stopPropagation();

        if ($("#right_btnhh")[0].offsetTop <= ($(".eng_box_right").height() - 26)) {
            var text = $("#right_btnhh")[0].offsetTop += 8;
            $("#right_btnhh").css("top", text);
            console.log(Math.floor(e.pageY - 118));
            $(".eng_box_left>ul").css("top", Math.floor(-$("#right_btnhh")[0].offsetTop * lang) + "px");
            console.log(e.pageY);
        }
        return false
    }
}
$(function() {
    $(".bd ul >li").click(function() {
        console.log($(this).index())
        var arr = ["a", "b", "c", "d", "E"];
        $(this).find("img").each(function(index) {
            localStorage.setItem(arr[index], $(this).attr("src"))
        });
        location.href = "cood.html";
        // console.log($(this).find("img").attr("src"));
    })

})
$(function() {
    $(".aside li:not(.goback)").click(function() {
        var oH = $(".floor").eq($(this).index()).offset().top - 150
        $("body,html").animate({
            "scrollTop": oH
        }, 500)
    })
    var long = 190 / 24; //首先求出进度条的比例产生关系
    // console.log(long);
    $(".eng>a").mouseenter(function() { //首先给所以。eng下面的a标签绑定鼠标进入事件
        var index = $(this).index(); //获取他们对应的索引
        var num = -$(".eng_box ul li").eq(index)[0].offsetTop; //我首先把juqery对像转了Dom对象使用top偏移量
        // console.log(num);
        if (index == 21) { //如果到达了最后一个
            num = -$(".eng_box ul li").eq(index)[0].offsetTop + 80; //主要是考虑的让最后一个不会跑上去
        }
        $(".eng_box_left>ul").css("top", num + "px"); //设置ul的top值是负数让他动起来
        $("#right_btnhh").css("top", long * index + "px"); //开始动了
        // console.log(long * index); //打印一下看看是否对
    })

    var nb = false; //创建一个变量，控制拖拉一会
    var lang = 13.25; //创建一个变量
    $("#right_btnhh").mousedown(function(e) {

        lang = 13.25; //13.25是用户ul的高度除以右边竖线的高度求出的
        e.preventDefault(); //阻止图片的默认拖拉效果
        nb = true;
    });
    $("body").mouseup(function() {
        nb = false;
    });
    $(".eng_box_right").mousemove(function(e) { //移动
        if (nb) {
            if (e.pageY < 287 && e.pageY > 116) {
                $("#right_btnhh").css("top", Math.floor(e.pageY - 118));
                $(".eng_box_left>ul").css("top", Math.floor(-Math.floor(e.pageY - 118) * lang) + "px");
            }
        }
    });
    $(".weizhi")[0].onmousewheel = function(e) {
        if (e.wheelDelta > 0) { //向上回去
            if ($("#right_btnhh")[0].offsetTop >= -1) {
                var text = $("#right_btnhh")[0].offsetTop -= 8;
                if (text < 0) {
                    text = 0;
                }
                $("#right_btnhh").css("top", text);
                $(".eng_box_left>ul").css("top", Math.floor(-$("#right_btnhh")[0].offsetTop * lang) + "px");
                return false;
            }
        } else { //向下
            if ($("#right_btnhh")[0].offsetTop <= ($(".eng_box_right").height() - 26)) {
                var text = $("#right_btnhh")[0].offsetTop += 8;
                $("#right_btnhh").css("top", text);
                $(".eng_box_left>ul").css("top", Math.floor(-$("#right_btnhh")[0].offsetTop * lang) + "px");
                return false;
            }
        }
    }
    $('.top_love>p').hover(function() {
        $(this).css({
            'background': '#fff',
            'border-bottom': '4px solid #fff'
        })
        $('.weizhi').css('display', 'block')
    }, function() {
        $('.weizhi').css('display', 'none')
        $(this).css({
            'background': '#EEEEEE',
            'border-bottom': '0px'
        })
    })
    $('.weizhi').hover(function() {
        $(this).css('display', 'block')
        $('.top_love>p').css({
            'background': '#fff',
            'border-bottom': '4px solid #fff'
        })
    }, function() {
        $(this).css('display', 'none')
        $('.top_love>p').css({
            'background': '#EEEEEE',
            'border-bottom': '0px'
        })
    })
})
$(function() {
    $(".Mstright_botm input").click(function() {
        location.href = "shopcar.html";
    })
})
$(function(){
    // 侧边栏
    flag = true;
    $("#ppt").mouseenter(function() {
        if (flag == true) {
            $(".spanbox").show(1000, function() {
                flag = true
            });
            $("#ppt>a").addClass("abc");
        }
        flag = false;

    });
    $("#ppt").mouseleave(function() {
        $("#ppt>a").removeClass("abc");
        $(".spanbox").slideUp(1000)
            // $(this).fadeOut(1000)
    });
    var text;
    $("#text1").focus(function() {
        text = $(this).val();
        if (text != " ") {
            $(this).val(" ");
        }
    });
    $("#text1").blur(function() {
        $(this).val(text);
    });

    $(window).scroll(function() {
        var str = $(this).scrollTop();
        if (str > 100) {
            $("#goback").show();
            $(".pputy").css("bottom", "50px");
            $("#goback").css("bottom", "0px");
        } else {
            $(".pputy").css("bottom", "0px")
            $("#goback").hide();
            $("#goback").css("bottom", "-50px");
        }
    })

    $("#goback").click(function() { //回到顶部
        $("body,html").animate({
            "scrollTop": 0
        }, 500)
    })
    $(".M_blacklove>div").mouseenter(function() {
        $(this).find(".leftbox").stop().animate({
            left: "-100px"
        }, 500);
        $(this).find(".leftbox").css("display", "block");
    })
    $(".M_blacklove>div").mouseleave(function() {
        $(this).find(".leftbox").css("display", "none")
        $(this).find(".leftbox").animate({
            left: "-140px"
        }, 50);
    })
    $("#cppl1").hover(function() {
        $("#mstLaft").fadeIn(1000);
    }, function() {
        $("#mstLaft").hide();
    })
    var flag = true;
    $("#shoplMst").click(function() {
        if (flag == true) {
            $(".Mstright_botm").show();
            $(".Mstright_top>span").text("购物车");
            $(".Mstright-photo").show();
            $(".mst_main span").text("购物车空空的，赶快去挑选心仪的商品吧~");
            $(".rigth-black").animate({
                right: "0px"
            }, 1000)
            flag = false;
        } else if (flag == false) {
            $(".rigth-black").animate({
                right: "-300px"
            }, 1000)
            flag = true;
        }
        return false;
    })
    $("#mstcolde").click(function() {
        flag = true;
        $(".rigth-black").animate({
            right: "-300px"
        }, 1000);
        return false;
    });
    $("body").click(function(e) {
        if (e.pageX < 1150) {
            flag = true;
            $(".rigth-black").animate({
                right: "-300px"
            }, 1000);
        }
    });
    $("a").click(function() {
        event.stopPropagation()
    })
    $("#goodbtn").click(function() {
        location.href = "shopcar.html";
    })

    $("#look").click(function() {
        if (flag == true) {
            $(".Mstright_top>span").text("我的足迹");
            $(".mst_main span").text("暂时没有商品浏览记录");
            $(".Mstright_botm").hide();
            $(".Mstright-photo").hide();
            $(".rigth-black").animate({
                right: "0px"
            }, 1000)
            flag = false;
        } else if (flag == false) {
            $(".rigth-black").animate({
                right: "-300px"
            }, 1000)
            flag = true;
        }
        return false;
    })

    $("#flirtli>ul>li").hover(function() { //细节
        var index = $(this).index();
        var he = $(this).height() * index;
        $(this).children("ul").css("top", "-" + he + "px");

        if (index < 3) {
            $(this).children("ul").css("height", "635px");
        }

    })
    var id = null;
    $("#weizhi").mouseenter(function() {
        $("#Mstbbq").show(600);
    }).mouseleave(function() {
        id = setTimeout(function() {
            $("#Mstbbq").hide(1000);
        }, 500);

    })
    $("#Mstbbq").mouseenter(function() {
        clearTimeout(id);
        $(this).show();
    }).mouseleave(function() {
        $(this).hide(1000);
    })
    var arr = ["justyle", "鲍汁", "皮克朋", "小米", "麦斯威尔", "飞利浦", "华为"];
    var newflag = [];
    $(".Mst_main_rigth1 div").hover(function() {
        var index = $(this).index();
        if (newflag.indexOf(index) == -1) {
            newflag.push(index);
            console.log(index);
            $(this).html($(this).html() + "<span>" + arr[index] + "</span>");
        }
        $(this).find("span").show();
        $(this).children("img").hide();
    }, function() {
        $(this).find("span").hide();
        $(this).children("img").show();
    })
    var flag = true;
    $("#mst_btnxia").click(function() {
        if (flag == true) {
            $(this).parents(".mst_main_top3").animate({
                height: "160px"
            }, 500);
            flag = false;
            $(this).text("∧")
        } else if (flag == false) {
            $(this).parents(".mst_main_top3").animate({
                height: "95px"
            }, 800);
            $(this).text("﹀")
            flag = true;
        }

    })
    var obje = "";
    $(".Mst_main_top4_left>a").mouseenter(function() {
        if ($(this).index() != 0) {
            obje = $(this).children("img").attr("src");
            $(this).children("img").attr("src", "img/1234.png");
        }

    }).mouseleave(function() {
        if ($(this).index() != 0) {
            $(this).children("img").attr("src", obje);
        }
    })
    $(".mst_mk .mst_mk_btom > ul >li").mouseenter(function() {
        $(this).parents(".mst_mk").children("img").attr("src", $(this).children("img").attr("src"))
    })
    var udb = true;
    $(".mstnb").click(function() {
        if (udb == true) {
            $("#MstS1").animate({
                "margin-right": "-226px"
            }, 1000, function() {
                $("#MstS1").children("div").hide();

            })
            $(this).val("<");
            console.log(1);
            udb = false;
        } else if (udb == false) {
            $("#MstS1").animate({
                "margin-right": "0px"
            }, 1000)
            setTimeout(function() {
                $("#MstS1").children("div").show();
                $(".mstnb").val(">");

            }, 100)
            udb = true;
        }
    })
    var bnarr = [];
    var abcarr = [];
    var initobj = [];
    var bkbr = [];
    var objbbr = [];

    function filer(arr, objrr) { //封装了一个冒泡排序的方法
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    [objrr[j], objrr[j + 1]] = [objrr[j + 1], objrr[j]];
                }
            }
        }
    }
    for (var i = 0; i < $(".mst_mk").length; i++) { //首先循环出来这个对象
        initobj.push($(".mst_mk")[i]); //放到一个数组里面
    }
    console.log(bnarr);
    // img/上箭头 666.png
    var udb = true;
    $(".Mst_main_top4_left>a").click(function() {
        $(this).css("color", "red").siblings("a").css("color", "black");
        if ($(this).index() == 0) {
            for (var i = 0; i < initobj.length; i++) {
                $(initobj[i]).appendTo($(".mainbox"));
            }
        }
        if ($(this).index() == 1) {
            for (var i = 0; i < $(".mst_mk").length; i++) { //首先循环出来这个对象
                bnarr.push($(".mst_mk")[i]); //放到一个数组里面
            }
            $(".mst_mk").each(function() {
                abcarr.push(parseInt($(this).find("span").text().substring($(this).find("span").text().indexOf("售") + 1, $(this).find("span").text().indexOf("件"))));
            })
            filer(abcarr, bnarr);
            for (var i = 0; i < bnarr.length; i++) {
                $(bnarr[i]).appendTo($(".mainbox"));
            }
        }
        if ($(this).index() == 2) {
            var newarr = initobj.concat();

            newarr.reverse();
            for (var i = 0; i < newarr.length; i++) {
                $(newarr[i]).appendTo($(".mainbox"));
            }
        }

        if ($(this).index() == 4) {
            if (udb == true) {
                for (var i = 0; i < $(".mst_mk").length; i++) {
                    objbbr.push($(".mst_mk")[i]);
                }
                $(".mst_mk").each(function() {
                    bkbr.push(parseInt($(this).find("strong").text().substring($(this).find("strong").text().indexOf("￥") + 1, $(this).find("strong").html().indexOf("."))));
                })
                for (var k = 0; k < bkbr.length; k++) {
                    for (var b = 0; b < bkbr.length - 1 - k; b++) {
                        if (bkbr[b] > bkbr[b + 1]) {
                            [bkbr[b], bkbr[b + 1]] = [bkbr[b + 1], bkbr[b]];
                            [objbbr[b], objbbr[b + 1]] = [objbbr[b + 1], objbbr[b]];
                        }
                    }
                }
                for (var y = 0; y < objbbr.length; y++) {
                    $(objbbr[y]).appendTo($(".mainbox"));
                }
                udb = false;
            } else if (udb == false) {
                objbbr.reverse();
                for (var z = 0; z < objbbr.length; z++) {
                    $(objbbr[z]).appendTo($(".mainbox"));
                }
                udb = 0;

            } else {
                objbbr.reverse();
                for (var z = 0; z < objbbr.length; z++) {
                    $(objbbr[z]).appendTo($(".mainbox"));
                }
            }


        }
        return false;

    });
    $(".Mst_left_top4").children("input").focus(function() {
        $(this).siblings("div").show();
    }).blur(function() {
        $(this).siblings("div").fadeOut(600);
    });
    $(".mst_mk").click(function() {
        var arr = ["a", "b", "c", "d", "E"];
        $(this).find("ul").find("img").each(function(index) {
            localStorage.setItem(arr[index], $(this).attr("src"))
        });

        location.href = "cood.html";
    })

    $(".b1").hover(function() {
        $(".abb").eq(0).addClass("udb");
        $(".abb").eq($(this).index()).show(500);
        $(this).addClass("butnhh");

    }, function() {
        $(this).removeClass("butnhh");
        $(".abb").eq($(this).index()).hide();
        $(".abb").eq($(this).index()).removeClass("udb");
    })

    $(".b2").hover(function() {
        $(".abb").eq(1).addClass("udb");
        $(".abb").eq(1).show(500);
        $(this).addClass("butnhh");

    }, function() {
        $(this).removeClass("butnhh");
        $(".abb").eq(1).hide();
        $(".abb").eq(1).removeClass("udb");
    })
})
$(function(){
    // 地理位置
    var long = parseInt($(".eng_box_right").height()) / 25//首先求出进度条的比例产生关系
    // console.log(long);
    $(".eng>a").mouseenter(function() { //首先给所以。eng下面的a标签绑定鼠标进入事件
        var index = $(this).index(); //获取他们对应的索引
        var num = -$(".eng_box ul li").eq(index)[0].offsetTop; //我首先把juqery对像转了Dom对象使用top偏移量
        // console.log(num);
        if (index == 21) { //如果到达了最后一个
            num = -$(".eng_box ul li").eq(index)[0].offsetTop +50; //主要是考虑的让最后一个不会跑上去
        }
        $(".eng_box_left>ul").css("top", num + "px"); //设置ul的top值是负数让他动起来
        $("#right_btnhh").css("top", long * index + "px"); //开始动了
        // console.log(long * index); //打印一下看看是否对
    })

    var nb = false; //创建一个变量，控制拖拉一会
    var lang = 19.3; //创建一个变量
    $("#right_btnhh").mousedown(function(e) {

         lang = 20; //13.25是用户ul的高度除以右边竖线的高度求出的
        e.preventDefault(); //阻止图片的默认拖拉效果
        nb = true;
    });
    $("body").mouseup(function() {
        nb = false;
    });
    $(".eng_box_right").mousemove(function(e) { //移动
        if (nb) {
            if (e.pageY < 265 && e.pageY > 118) {
                $("#right_btnhh").css("top", Math.floor(e.pageY - 120));
                $(".eng_box_left>ul").css("top", Math.floor(-Math.floor(e.pageY - 120) * lung) + "px");
            }
        }
    });
    $(".weizhi")[0].onmousewheel = function(e) {
        if (e.wheelDelta > 0) { //向上回去
            if ($("#right_btnhh")[0].offsetTop >= -1) {
                var text = $("#right_btnhh")[0].offsetTop -= 8;
                if (text < 0) {
                    text = 0;
                }
                $("#right_btnhh").css("top", text);
                $(".eng_box_left>ul").css("top", Math.floor(-$("#right_btnhh")[0].offsetTop * lang) + "px");
                return false;
            }
        } else { //向下
            if ($("#right_btnhh")[0].offsetTop <= ($(".eng_box_right").height() - 26)) {
                var text = $("#right_btnhh")[0].offsetTop += 8;
                $("#right_btnhh").css("top", text);
                $(".eng_box_left>ul").css("top", Math.floor(-$("#right_btnhh")[0].offsetTop * lang) + "px");
                return false;
                // e.preventDefault()
            }
        }
    }
})