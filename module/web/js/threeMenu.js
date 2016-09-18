/**
 * Created by dgx on 2016/9/14.
 */
var app = angular.module('myApp',[])
app.controller('myController',myController);
function myController($scope) {
    var data =
    {
        "threeLevelDropDown": [{
            "code": "S00001",
            "name": "字符创场景",
            "_profiles": [{"_rules": [], "code": "Ptest_app_xy_111110000", "name": "字符场景"}]
        }, {
            "code": "00001",
            "name": "登陆场景\t00001",
            "_profiles": [{
                "_rules": [{
                    "code": "test_app_xy_black_moblie",
                    "name": "手机黑名单"
                }, {"code": "test_app_xy_tag_rule_test", "name": "A_tag测试规则"}, {
                    "code": "R_com_code_0001",
                    "name": "测试常用地规则"
                }, {"code": "test_app_xy哈哈哈哈哈哈", "name": "O(∩_∩)O哈！"}, {
                    "code": "test_app_xy_black_ip",
                    "name": "IP黑名单"
                }, {"code": "test_app_xy_black_mobile_A", "name": "A_电话黑名单规则"}, {
                    "code": "test_app_xy_simple_conditions",
                    "name": "A_简单规则测试"
                }, {"code": "test_app_xy_count_rule_test01", "name": "A_流量规则测试001"}],
                "code": "Ptest_app_xy000009",
                "name": "0000096932"
            }]
        }, {
            "code": "IP_Code_ID",
            "name": "IP地址场景",
            "_profiles": [{
                "_rules": [{"code": "test_app_xy_black_moblie", "name": "手机黑名单"}, {
                    "code": "test_app_xy_IP_0001",
                    "name": "测试IP规则_001"
                }, {"code": "test_app_xy_IP_black", "name": "IP黑名单_0001"}, {
                    "code": "test_app_xy_Ip_white",
                    "name": "IP白名单_0001"
                }, {"code": "test_app_xy_white_phone", "name": "phone白名单_0001"}, {
                    "code": "test_app_xy_dis_00002",
                    "name": "移动距离_xy_02"
                }], "code": "Ptest_app_xy00009", "name": "Ip地址场景"
            }]
        }, {"code": "user_name_ID", "name": "用户名场景", "_profiles": []}, {
            "code": "time_id",
            "name": "日期场景",
            "_profiles": []
        }, {"code": "number_id", "name": "数值场景", "_profiles": []}, {
            "code": "speed_id",
            "name": "移动速度场景",
            "_profiles": []
        }, {"code": "dis_id", "name": "移动距离场景", "_profiles": []}, {
            "code": "——00009",
            "name": "阿里小号",
            "_profiles": []
        }, {"code": "request_id", "name": "请求场景", "_profiles": []}, {
            "code": "abcd",
            "name": "响应时间场景",
            "_profiles": []
        }, {
            "code": "c_id",
            "name": "日志场景",
            "_profiles": [{
                "_rules": [{"code": "test_app_xy_dis_00002", "name": "移动距离_xy_02"}, {
                    "code": "test_app_xy_speed_001",
                    "name": "测试移动速度"
                }], "code": "Ptest_app_xytest_001", "name": "xy_test_001"
            }]
        }, {"code": "TEST_0001", "name": "登陆场景XY", "_profiles": []}, {
            "code": "Flow_scenario_0001",
            "name": "流量场景",
            "_profiles": [{
                "_rules": [{
                    "code": "test_app_xy_flow_test",
                    "name": "测试流量_0001"
                }, {"code": "test_app_xy_flow_test_0002", "name": "测试流量_0002"}],
                "code": "Ptest_app_xy_0001",
                "name": "流量profile"
            }]
        }, {
            "code": "reg_001",
            "name": "正则表达式场景",
            "_profiles": [{
                "_rules": [{"code": "test_app_xy_reg_0001", "name": "测试正则匹配_0001"}],
                "code": "Ptest_app_xyreg_0001",
                "name": "正则测试"
            }]
        }, {
            "code": "List_0001",
            "name": "名单场景",
            "_profiles": [{
                "_rules": [{
                    "code": "test_app_xy_test_order_0001",
                    "name": "测试名单规则"
                }, {"code": "test_app_xy_s_blackIp", "name": "自定义IP黑名单"}, {
                    "code": "test_app_xytag_001",
                    "name": "标签规则"
                }, {"code": "test_app_xyCom_001", "name": "常规条件_001"}],
                "code": "Ptest_app_xylist_001",
                "name": "测试名单"
            }]
        }, {
            "code": "first_id",
            "name": "首次条件场景",
            "_profiles": [{
                "_rules": [{"code": "test_app_xy_first_001", "name": "测试首次条件"}],
                "code": "Ptest_app_xyfir_001",
                "name": "测试首次场景"
            }]
        }, {
            "code": "sdk_001",
            "name": "SDK环境检测",
            "_profiles": [{
                "_rules": [{"code": "test_app_xyphone_root", "name": "测试手机已root"}, {
                    "code": "test_app_xyphoneismu",
                    "name": "所用手机是模拟器"
                }, {"code": "test_app_xyphoneischanged", "name": "所用手机有信息篡改"}, {
                    "code": "test_app_xyphonesecpackaged",
                    "name": "测试所用手机有二次打包"
                }, {"code": "test_app_xyal", "name": "测试阿里小号"}],

                "code": "Ptest_app_xysdk_001", "name": "测试SDK环境检测"
            }]
        }, {
            "code": "mix_0001",
            "name": "混合场景",
            "_profiles": [{
                "_rules": [{"code": "test_app_xy_dis_00001", "name": "移动距离_xy"}, {
                    "code": "test_app_xy_IP_black",
                    "name": "IP黑名单_0001"
                }, {"code": "test_app_xy_Ip_white", "name": "IP白名单_0001"}, {
                    "code": "test_app_xy_white_phone",
                    "name": "phone白名单_0001"
                }, {"code": "test_app_xy_phone_black", "name": "手机黑名单"}, {
                    "code": "test_app_xyCom_001",
                    "name": "常规条件_001"
                }, {"code": "test_app_xyCom_003", "name": "常规条件数值_001"}, {
                    "code": "test_app_xyCom_001_时间",
                    "name": "常规条件时间_001"
                }, {"code": "test_app_xyComm_time_001", "name": "测试日期_001"}],
                "code": "Ptest_app_xy_m_001",
                "name": "混合场景测试"
            }]
        }]
    };
    $scope.scenarios = data.threeLevelDropDown;
    $scope.sNeed = $scope.scenarios[0];
    $scope.$watch('sNeed',function (newVal) {
        $scope.profiles=null;
        $scope.pNeed=null;
        //$scope.rNeed=null;
        console.log(newVal.name);
        if(newVal) {
            ($scope.profiles = newVal._profiles) && ($scope.pNeed = $scope.profiles[0]);
            console.log($scope.pNeed);
        }
    });
    $scope.$watch('pNeed',function (newVal) {
        console.log(newVal);
        $scope.rules=null;
        $scope.rNeed=null;
        if(newVal)
        ($scope.rules = newVal._rules)&&($scope.rNeed = $scope.rules[0])

    })
    $scope.$watch('profiles',function (newVal) {
        console.log(newVal.length);
    })
}


