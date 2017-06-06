<template>
   <div class="signin">
        <div class="signinpanel">
            <div class="row">
                <div class="col-sm-7">
                    <div class="signin-info">
                        <div class="logopanel m-b">
                            <h1>[ H+ ]</h1>
                        </div>
                        <div class="m-b"></div>
                        <h4>欢迎使用 <strong>H+ 后台主题UI框架</strong></h4>
                        <ul class="m-b">
                            <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 优势一</li>
                            <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 优势二</li>
                            <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 优势三</li>
                            <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 优势四</li>
                            <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 优势五</li>
                        </ul>
                        <strong>还没有账号？ <a href="#">立即注册&raquo;</a></strong>
                    </div>
                </div>
                <div class="col-sm-5">
                    <form method="post" action="index.html">
                        <h4 class="no-margins">登录：</h4>
                        <p class="m-t-md">登录到H+后台主题UI框架</p>
                        <input type="text" class="form-control uname" placeholder="用户名" />
                        <input type="password" class="form-control pword m-b" placeholder="密码" />
                        <a href="">忘记密码了？</a>
                        <button class="btn btn-success btn-block">登录</button>
                    </form>
                </div>
            </div>
            <div class="signup-footer">
                <div class="pull-left">
                    &copy; 2015 All Rights Reserved. H+
                </div>
            </div>
        </div>
     </div>
</template>
<script>
        
</script>
<style>
    html{height: 100%;}
    body .signin {
       /* background: #18c8f6;
        height: auto;
        background:url("../assets/img/login-background.jpg") no-repeat center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        color: rgba(255,255,255,.95);*/
    }

    .signinpanel {
        width: 750px;
        margin: 10% auto 0 auto;
    }

    .signinpanel .logopanel {
        float: none;
        width: auto;
        padding: 0;
        background: none;
    }

    .signinpanel .signin-info ul {
        list-style: none;
        padding: 0;
        margin: 20px 0;
    }

    .signinpanel .form-control {
        display: block;
        margin-top: 15px;
    }

    .signinpanel .uname {
        background: #fff url(../assets/img/user.png) no-repeat 95% center;color:#333;
    }

    .signinpanel .pword {
        background: #fff url(../assets/img/locked.png) no-repeat 95% center;color:#333;
    }

    .signinpanel .btn {
        margin-top: 15px;
    }

    .signinpanel form {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255,255,255,.3);
        -moz-box-shadow: 0 3px 0 rgba(12, 12, 12, 0.03);
        -webkit-box-shadow: 0 3px 0 rgba(12, 12, 12, 0.03);
        box-shadow: 0 3px 0 rgba(12, 12, 12, 0.03);
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        padding: 30px;
    }

    .signup-footer{border-top: solid 1px rgba(255,255,255,.3);margin:20px 0;padding-top: 15px;}

    @media screen and (max-width: 768px) {
        .signinpanel,
        .signuppanel {
            margin: 0 auto;
            width: 420px!important;
            padding: 20px;
        }
        .signinpanel form {
            margin-top: 20px;
        }
        .signup-footer {
            margin-bottom: 10px;
        }
        .signuppanel .form-control {
            margin-bottom: 10px;
        }
        .signup-footer .pull-left,
        .signup-footer .pull-right {
            float: none !important;
            text-align: center;
        }
        .signinpanel .signin-info ul {
            display: none;
        }
    }
    @media screen and (max-width: 320px) {
        .signinpanel,
        .signuppanel {
            margin:0 20px;
            width:auto;
        }
    }

</style>