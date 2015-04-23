// Helpers
function _math_round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

$(document).ready(function () {
    // Var
    var nhommon = {
        1: {
            1: 'Toán',
            2: 'Lý',
            3: 'Hóa'
        },
        2: {
            1: 'Toán',
            2: 'Lý',
            3: 'NN'
        }
    }

    $('form#xettuyen select[name=nhommon]').on('change', function (e) {
        var me = $(this)
        var group = me.val();

        if (group == 0) {
            $('form#xettuyen div.sub_1_form label').text('Điểm môn 1')
            $('form#xettuyen div.sub_1_form input.nhapdiemform').prop('disabled', true)
            $('form#xettuyen div.sub_2_form label').text('Điểm môn 2')
            $('form#xettuyen div.sub_2_form input.nhapdiemform').prop('disabled', true)
            $('form#xettuyen div.sub_3_form label').text('Điểm môn 3')
            $('form#xettuyen div.sub_3_form input.nhapdiemform').prop('disabled', true)
        } else {
            $.each(nhommon[group], function (index, value) {
                $('form#xettuyen div.sub_' + index + '_form label').text('Điểm môn ' + index + " : " + value)
                $('form#xettuyen div.sub_' + index + '_form input.nhapdiemform').prop('disabled', false)
            })
        }
    })
    
    $('form#xettuyen input.nhapdiemform').on('change', function(e) {
        var me = $(this)
        var form = me.parent().parent().parent()        
        var count = 0;
        var sum = 0;
        var error = false;
        
        form.removeClass('has-error')
        
        form.find('.nhapdiemform').each(function (){
            var sub = $(this)
            
            if(sub.val() != '') {
                if($.isNumeric(sub.val())) {
                    count++
                    sum += parseFloat(sub.val())
                }
                else {
                    error = true;
                }
            }
        })
        
        if(error) {
            form.find('.ketqua').val('Nhập sai')
            form.addClass('has-error')
            return;
        }
        
        form.find('.ketqua').val(_math_round(sum / count, 2))
    })
})
