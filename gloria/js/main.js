    $(function() {

        var $items = $('#cc_menu .cc_item');
        var cnt_items = $items.length;
        var folded = false;
        var menu_time;

        $items.unbind('mouseenter')
            .bind('mouseenter',m_enter)
            .unbind('mouseleave')
            .bind('mouseleave',m_leave)
            .find('.cc_submenu > ul > li')
            .bind('click',function(){

                var $li_e = $(this);
                if(folded){
                    hideContent();
                    showContent($li_e.attr('class').split(' ')[0]);
                }
                else
                    fold($li_e);
            });

        function m_enter(){
            var $this 	= $(this);
            clearTimeout(menu_time);
            menu_time 	= setTimeout(function(){
                $this.find('img').stop().animate({'top':'0px'},400);
                $this.find('.cc_submenu > ul').stop().animate({'height':'200px'},400);
            },200);
        }


        function m_leave(){
            var $this = $(this);
            clearTimeout(menu_time);
            $this.find('img').stop().animate({'top':'-954px'},400);
            $this.find('.cc_submenu > ul').stop().animate({'height':'0px'},400);
        }


        $('#cc_back').bind('click',unfold);


        $('.menu1, .menu2, .menu3, .menu4, .menu5').bind('click', function(){
            var $li_e = $(this);
            fold($li_e, 1);
            unfold();
        });

        function fold($li_e, tt){
            var $item = $li_e.closest('.cc_item');

            var d = 100;
            var step = 0;
            $items.unbind('mouseenter mouseleave');
            $items.not($item).each(function(){
                var $item = $(this);
                $item.stop().animate({
                    'marginLeft':'-140px'
                },d += 200,function(){
                    ++step;
                    if(step == cnt_items-1 && tt != 1){
                        folded = true;
                        showContent($li_e.attr('class').split(' ')[0]);
                    }
                });
            });
        }

        function unfold(){
            $("#wrapper").remove();
            $("#wrapper2").remove();
            $('#cc_content').stop().animate({'left':'-1300px'},600,function(){
                var d = 100;
                var step = 0;
                $items.each(function(){
                    var $item = $(this);

                    $item.find('img')
                        .stop()
                        .animate({'top':'-954px'},200)
                        .andSelf()
                        .find('.cc_submenu > ul')
                        .stop()
                        .animate({'height':'0px'},200);

                    $item.stop().animate({
                        'marginLeft':'0px'
                    },d += 200,function(){
                        ++step;
                        if(step == cnt_items-1){
                            folded = false;
                            $items.unbind('mouseenter')
                                .bind('mouseenter',m_enter)
                                .unbind('mouseleave')
                                .bind('mouseleave',m_leave);

                            hideContent();
                        }
                    });
                });
            });
        }
      
        function showContent(idx){

            $('#cc_content').stop().animate({'left':'25%'},200,function(){
                $(this).find('.'+idx).fadeIn();
            });
        }

        function hideContent(){
            $('#cc_content').find('div').hide();
        }

        $('.menu1').click(function(){
            unfold();
            hideContent();
            showContent('menu1');
        });


        $('.menu2').click(function(){
            unfold();
            hideContent();
            showContent('menu2');

        });
        $('.menu3').click(function(){
            unfold();
            hideContent();
            showContent('menu3');

        });
        $('.menu4').click(function(){
            unfold();
            hideContent();
            showContent('menu4');

        });
        $('.menu5').click(function(){
            unfold();
            hideContent();
            showContent('menu5');
        });

    });







