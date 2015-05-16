function _math_round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

$(document).ready(function () {
// Menu
    $('.dropdown').hover(
            function () {
                $(this).addClass('open')
            },
            function () {
                $(this).removeClass('open')
            }
    )

    // To top
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.totop').show()
        } else {
            $('.totop').hide();
        }
    })

    $('.totop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
    })

    // Var
    var nhommon = {
        'A00': {
            1: 'Toán',
            2: 'Lý',
            3: 'Hóa'
        },
        'A01': {
            1: 'Toán',
            2: 'Lý',
            3: 'Anh'
        },
        'D01': {
            1: 'Văn',
            2: 'Toán',
            3: 'Anh'
        }
    }

    var truongpt = {
        "4": {
            "1": "THPT Nguyễn Hiền",
            "2": "THPT Phan Châu Trinh",
            "3": "THPT Trần Phú",
            "4": "THPT TT Diên Hồng",
            "5": "THPT Chuyên Lê Quý Đôn",
            "6": "TTGDTX-HN Hải Châu+BTBK+CĐCN",
            "7": "THPT Thái Phiên",
            "8": "TT GDTX-HN Thanh Khê",
            "9": "THPT TT Quang Trung",
            "10": "THPT Hoàng Hoa Thám",
            "11": "THPT Ngô Quyền",
            "12": "TT GDTX Thành Phố",
            "13": "TT KTTH-HN Sơn Trà",
            "14": "THPT Ngũ Hành Sơn",
            "15": "TT GDTX -HN N.H. Sơn+ BTĐH Kinh tế",
            "16": "Dân Lập Hermann Gmeiner",
            "17": "THPT Nguyễn Trãi",
            "18": "THPT TT Khai Trí",
            "19": "TT GDTX-HN Liên Chiểu",
            "20": "THPT Hòa Vang",
            "21": "THPT Phan Thành Tài",
            "22": "THPT Ông ích Khiêm",
            "23": "THPT Phạm Phú Thứ",
            "24": "TT GDTX-HN Cẩm Lệ",
            "25": "TT GDTX-HN Hòa Vang",
            "26": "THPT Nguyễn Thượng Hiền",
            "27": "THPT Tôn Thất Tùng",
            "28": "THPT Thanh Khê",
            "29": "THPT Cẩm Lệ",
            "30": "CĐ Đông á",
            "31": "CĐ Phương Đông",
            "32": "TC CKN Việt Tiến",
            "33": "TC KTNV Thăng Long",
            "34": "TC KT-KT Miền Trung",
            "35": "TC KT-NV Việt á",
            "36": "TC KT-KT Đức Minh",
            "37": "CĐ nghề Đà Nẵng",
            "38": "CĐ nghề Hoàng Diệu",
            "39": "CĐ nghề Nguyễn Văn Trỗi",
            "40": "CĐ nghề Du Lịch Đà Nẵng",
            "41": "TC nghề Giao thông vận tải Đường bộ",
            "42": "TC nghề số 5",
            "43": "TC nghề Công nghiệp Tàu thuỷ III",
            "44": "TC nghề Giao thông Công chính ĐN",
            "45": "TC nghề Kỹ thuật Công nghệ Đà Nẵng",
            "46": "TC cấp nghề Cao Thắng Đà Nẵng",
            "47": "TC nghề Công nghiệp tàu thuỷ Đà Nẵng",
            "48": "TC cấp nghề Việt  úc"
        },
        "34": {
            "2": "THPT  Phan Bội Châu",
            "3": "THPT  Trần Cao Vân",
            "4": "THPT  Lê Quý Đôn",
            "5": "THPT DL  Hà Huy Tập",
            "6": "TT. GDTX tỉnh Quảng Nam",
            "7": "THPT Chuyên Nguyễn Bỉnh Khiêm",
            "8": "TT. GDTX-HN&DN  Hội An",
            "9": "THPT  Trần Quý Cáp",
            "11": "PTDT Nội trú tỉnh Quảng Nam",
            "12": "THPT NguyễnTrãi",
            "13": "THPT   Sào Nam",
            "14": "THPT  Lê Hồng Phong",
            "15": "TT. GDTX-HN  Duy Xuyên",
            "16": "THPT  Nguyễn Hiền",
            "17": "THPT  Nguyễn Duy Hiệu",
            "18": "THPT  Hoàng Diệu",
            "19": "THPT  Phạm Phú Thứ",
            "20": "THPT  Lương Thế Vinh",
            "21": "THPT  Nguyễn Khuyến",
            "22": "TT. GDTX-HN  Điện Bàn",
            "23": "THPT  Huỳnh Ngọc Huệ",
            "24": "THPT  Chu Văn An",
            "25": "THPT  Đỗ Đăng Tuyển",
            "26": "THPT  Lương Thúc Kỳ",
            "27": "TT. GDTX-HN&DN  Đại Lộc",
            "29": "THPT   Quế Sơn",
            "30": "THPT  Nguyễn Văn Cừ",
            "31": "THPT   Nông Sơn",
            "32": "THPT  Trần Đại Nghĩa",
            "33": "TT. GDTX-HN&DN  Quế Sơn",
            "34": "THPT DL Phạm Văn Đồng",
            "35": "THPT   Hiệp Đức",
            "36": "TT. GDTX-HN&DN  Hiệp Đức",
            "37": "THPT   Tiểu La",
            "38": "THPT  Nguyễn Thái Bình",
            "39": "THPT Thái Phiên",
            "40": "THPT  Lý Tự Trọng",
            "41": "TT. GDTX-HN&DN  Thăng Bình",
            "42": "THPT   Núi Thành",
            "43": "THPT  Cao Bá Quát",
            "44": "THPT  Nguyễn Huệ",
            "45": "TT. GDTX-HN  Núi Thành",
            "46": "THPT  Huỳnh Thúc Kháng",
            "47": "THPT  Phan Châu Trinh",
            "48": "TT. GDTX-HN&DN  Tiên Phước",
            "49": "THPT Bắc Trà My",
            "50": "TT. GDTX-HN Bắc Trà My",
            "51": "THPT   Quang Trung",
            "52": "THPT   Nam Giang",
            "53": "THPT   Khâm Đức",
            "54": "THPT  Trần Văn Dư",
            "55": "TT GDTX-HN&DN  Phú Ninh",
            "56": "THPT Nam Trà My",
            "57": "THPT Tây Giang",
            "58": "TT.GDTX-HN Nam Trà My",
            "59": "TT.GDTX Phước Sơn",
            "60": "TT.GDTX Nam Giang",
            "61": "THPT Nguyễn Dục",
            "62": "PTDT Nội trú Nước Oa",
            "63": "CĐ Nghề Quảng Nam",
            "64": "TC Nghề Bắc Quảng Nam",
            "65": "TC Nghề Nam Quảng Nam",
            "66": "Trường TC Nghề Thanh niên Dân tộc-Miền n",
            "67": "Trường TC Quảng Đông",
            "68": "Trường TC Bách khoa Quảng Nam",
            "69": "THPT  Trần Phú",
            "70": "THPT  Âu Cơ",
            "71": "THPT  Trần Hưng Đạo",
            "72": "Trường PT nhiều cấp học Hoàng Sa",
            "73": "THPT  Duy Tân",
            "74": "THPT  Hùng Vương",
            "75": "THPT  Nguyễn Văn Trỗi",
            "76": "CĐ Kinh tế-Kỹ thuật Quảng Nam",
            "77": "Trường TC Văn hóa, NT và Du lịch Quảng N",
            "78": "CĐ Phương Đông Quảng Nam",
            "79": "CĐ Công kỹ nghệ Đông á Quảng Nam",
            "80": "CĐ Điện lực miền Trung",
            "81": "CĐ Công nghệ-KT và Thủy lợi miền Trung",
            "82": "CĐ Y tế Quảng Nam",
            "83": "Trường ĐH Quảng Nam",
            "84": "CĐ Nghề Chu Lai-Trường Hải"
        }
    }

    var makeSchoolSelect = function (data) {
        var html = ''
        $.each(data, function (index, value) {
            html += '<option value="' + index + '">' + value + '</option>'
        })
        $('form#xettuyen select[name=school]').html(html).prop('disabled', false)
    }

    $('form#xettuyen select[name=province]').on('change', function (e) {
        var me = $(this)
        var pro = me.val();
        if (pro == "") {
            $('form#xettuyen select[name=school]').html('<option value="0">Chọn trường</option>').prop('disabled', true)
        } else {
            if (typeof truongpt[pro] == 'undefined') {
                $('form#xettuyen select[name=school]').html('<option value="0">Đang tải</option>').prop('disabled', true)
                $('form#xettuyen select[name=province]').prop('disabled', true)
                $.getJSON('data/pt_' + pro + '.json', function (data) {
                    truongpt[pro] = data
                    makeSchoolSelect(data)
                    $('form#xettuyen select[name=province]').prop('disabled', false)
                });
            } else {
                makeSchoolSelect(truongpt[pro])
            }
        }
    })

    $('form#xettuyen select[name=subject_combination]').on('change', function (e) {
        var me = $(this)
        var group = me.val();
        if (group == 0) {
            $('form#xettuyen div.sub1_form label').text('Điểm môn 1')
            $('form#xettuyen div.sub1_form input.nhapdiemform').prop('disabled', true)
            $('form#xettuyen div.sub2_form label').text('Điểm môn 2')
            $('form#xettuyen div.sub2_form input.nhapdiemform').prop('disabled', true)
            $('form#xettuyen div.sub3_form label').text('Điểm môn 3')
            $('form#xettuyen div.sub3_form input.nhapdiemform').prop('disabled', true)
        } else {
            $.each(nhommon[group], function (index, value) {
                $('form#xettuyen div.sub' + index + '_form label').text('Điểm môn ' + index + " : " + value)
                $('form#xettuyen div.sub' + index + '_form input.nhapdiemform').prop('disabled', false)
            })
        }
    })

    $('form#xettuyen input.nhapdiemform').on('change', function (e) {
        var me = $(this)
        var form = me.parent().parent().parent()
        var count = 0;
        var sum = 0;
        var error = false;
        form.removeClass('has-error')

        form.find('.nhapdiemform').each(function () {
            var sub = $(this)

            if (sub.val() != '') {
                if ($.isNumeric(sub.val()) && parseFloat(sub.val()) >= 0 && parseFloat(sub.val()) <= 10) {
                    count++
                    sum += parseFloat(sub.val())
                } else {
                    error = true;
                }
            }
        })

        if (error) {
            form.find('.ketqua').val('Nhập sai')
            form.addClass('has-error')
            return;
        }

        form.find('.ketqua').val(_math_round(sum / count, 2))
    })

    $('form#xettuyen').on('submit', function (e) {
        e.preventDefault()
        var me = $(this)
        var data = me.serialize();
        me.find('button').prop('disabled', true);
        $.post('https://vhmis.viethanit.edu.vn/education/public-api/admission/school-report/add', data, function (data) {
            if (data.error == '0') {
                alert('Cảm ơn bạn đã đăng ký xét tuyển vào trường Việt Hàn, chúng tôi sẽ liên lạc và thông báo kết quả sớm với bạn.')
                me[0].reset();
            } else {
                console.log(data.form_error.code + "\n");
                console.log(data.form_error.message + "\n");
                console.log(data.form_error.field + "\n");
                alert(data.message)
            }
            me.find('button').prop('disabled', false);
        }, 'json')
    })
})
