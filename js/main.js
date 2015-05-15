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

    var truongpt = {
        dn: {
            385: {"name": "Dân Lập Hermann Gmeiner", "value": "385"},
            374: {"name": "THPT Chuyên Lê Quý Đôn", "value": "374"},
            389: {"name": "THPT Hòa Vang", "value": "389"},
            379: {"name": "THPT Hoàng Hoa Thám", "value": "379"},
            380: {"name": "THPT Ngô Quyền", "value": "380"},
            383: {"name": "THPT Ngũ Hành Sơn", "value": "383"},
            370: {"name": "THPT Nguyễn Hiền", "value": "370"},
            395: {"name": "THPT Nguyễn Thượng Hiền", "value": "395"},
            386: {"name": "THPT Nguyễn Trãi", "value": "386"},
            391: {"name": "THPT Ông ích Khiêm", "value": "391"},
            392: {"name": "THPT Phạm Phú Thứ", "value": "392"},
            371: {"name": "THPT Phan Châu Trinh", "value": "371"},
            390: {"name": "THPT Phan Thành Tài", "value": "390"},
            376: {"name": "THPT Thái Phiên", "value": "376"},
            397: {"name": "THPT Thanh Khê", "value": "397"},
            396: {"name": "THPT Tôn Thất Tùng", "value": "396"},
            372: {"name": "THPT Trần Phú", "value": "372"},
            373: {"name": "THPT TT Diên Hồng", "value": "373"},
            387: {"name": "THPT TT Khai Trí", "value": "387"},
            378: {"name": "THPT TT Quang Trung", "value": "378"},
            388: {"name": "TT GDTX - HN Liên Chiểu", "value": "388"},
            381: {"name": "TT GDTX Thành Phố", "value": "381"},
            393: {"name": "TT GDTX-HN Cẩm Lệ", "value": "393"},
            394: {"name": "TT GDTX-HN Hòa Vang", "value": "394"},
            384: {"name": "TT GDTX-HN N.H.Sơn + BT Đại học Kinh tế", "value": "384"},
            377: {"name": "TT GDTX-HN Thanh Khê", "value": "377"},
            382: {"name": "TT KTTH-HN Sơn Trà", "value": "382"},
            375: {"name": "TTGDTX-HN H.Châu +BTBK+ CĐCN+ THPT TT Hồng Đức", "value": "375"}
        },
        qn: {
            1987: {"name": "PT DT Nội trú Nước Oa", "value": "1987"},
            3499: {"name": "PTDT Nội trú Nước Oa", "value": "3499"},
            1939: {"name": "PTDT Nội trú tỉnh Quảng Nam", "value": "1939"},
            1942: {"name": "THPT Lê Hồng Phong", "value": "1942"},
            1932: {"name": "THPT Lê Quý Đôn", "value": "1932"},
            1948: {"name": "THPT Lương Thế Vinh", "value": "1948"},
            1954: {"name": "THPT Lương Thúc Kỳ", "value": "1954"},
            1945: {"name": "THPT Nguyễn Duy Hiệu", "value": "1945"},
            1944: {"name": "THPT Nguyễn Hiền", "value": "1944"},
            1972: {"name": "THPT Nguyễn Huệ", "value": "1972"},
            1949: {"name": "THPT Nguyễn Khuyến", "value": "1949"},
            1940: {"name": "THPT NguyễnTrãi", "value": "1940"},
            1947: {"name": "THPT Phạm Phú Thứ", "value": "1947"},
            1975: {"name": "THPT Phan Châu Trinh", "value": "1975"},
            1931: {"name": "THPT Trần Cao Vân", "value": "1931"},
            1960: {"name": "THPT Trần Đại Nghĩa", "value": "1960"},
            1937: {"name": "THPT Trần Quý Cáp", "value": "1937"},
            1977: {"name": "THPT Bắc Trà My", "value": "1977"},
            1971: {"name": "THPT Cao Bá Quát", "value": "1971"},
            1952: {"name": "THPT Chu Văn An", "value": "1952"},
            1935: {"name": "THPT Chuyên Nguyễn Bỉnh Khiêm", "value": "1935"},
            1933: {"name": "THPT DL Hà Huy Tập", "value": "1933"},
            1962: {"name": "THPT DL Phạm Văn Đồng", "value": "1962"},
            1953: {"name": "THPT Đỗ Đăng Tuyển", "value": "1953"},
            1963: {"name": "THPT Hiệp Đức", "value": "1963"},
            1946: {"name": "THPT Hoàng Diệu", "value": "1946"},
            1951: {"name": "THPT Huỳnh Ngọc Huệ", "value": "1951"},
            1974: {"name": "THPT Huỳnh Thúc Kháng", "value": "1974"},
            1981: {"name": "THPT Khâm Đức", "value": "1981"},
            1968: {"name": "THPT Lý Tự Trọng", "value": "1968"},
            1980: {"name": "THPT Nam Giang", "value": "1980"},
            1984: {"name": "THPT Nam Trà My", "value": "1984"},
            1986: {"name": "THPT Nguyễn Dục", "value": "1986"},
            3498: {"name": "THPT Nguyễn Dục", "value": "3498"},
            1966: {"name": "THPT Nguyễn Thái Bình", "value": "1966"},
            1958: {"name": "THPT Nguyễn Văn Cừ", "value": "1958"},
            1959: {"name": "THPT Nông Sơn", "value": "1959"},
            1970: {"name": "THPT Núi Thành", "value": "1970"},
            1930: {"name": "THPT Phan Bội Châu", "value": "1930"},
            1979: {"name": "THPT Quang Trung", "value": "1979"},
            1957: {"name": "THPT Quế Sơn", "value": "1957"},
            1941: {"name": "THPT Sào Nam", "value": "1941"},
            1985: {"name": "THPT Tây Giang", "value": "1985"},
            1967: {"name": "THPT Thái Phiên", "value": "1967"},
            1965: {"name": "THPT Tiểu La", "value": "1965"},
            1982: {"name": "THPT Trần Văn Dư", "value": "1982"},
            1934: {"name": "TT. GDTX tỉnh Quảng Nam", "value": "1934"},
            1955: {"name": "TT. GDTX-HN Đại Lộc", "value": "1955"},
            1950: {"name": "TT. GDTX-HN Điện Bàn", "value": "1950"},
            1943: {"name": "TT. GDTX-HN Duy Xuyên", "value": "1943"},
            1973: {"name": "TT. GDTX-HN Núi Thành", "value": "1973"},
            1961: {"name": "TT. GDTX-HN Quế Sơn", "value": "1961"},
            1976: {"name": "TT. GDTX-HN Tiên Phước", "value": "1976"},
            1978: {"name": "TT. GDTX-HN Bắc Trà My", "value": "1978"},
            1964: {"name": "TT. GDTX-HN Hiệp Đức", "value": "1964"},
            1936: {"name": "TT. GDTX-HN Hội An", "value": "1936"},
            1983: {"name": "TT. GDTX-HN Phú Ninh", "value": "1983"},
            1969: {"name": "TT. GDTX-HN Thăng Bình", "value": "1969"},
            3487: {"name": "TT.GDTX Nam Giang", "value": "3497"}
        },
        qt: {
            1876: {"name": "THPT A Túc", "value": "1876"},
            1861: {"name": "THPT Bến Quan", "value": "1861"},
            1846: {"name": "THPT Cam Lộ", "value": "1846"},
            3494: {"name": "THPT Chế Lan Viên", "value": "3494"},
            1836: {"name": "THPT Chu Văn An", "value": "1836"},
            1839: {"name": "THPT Chuyên Lê Quý Đôn", "value": "1839"},
            1854: {"name": "THPT Cồn Tiên", "value": "1854"},
            1859: {"name": "THPT Cửa Tùng", "value": "1859"},
            1852: {"name": "THPT Đakrông", "value": "1852"},
            1840: {"name": "THPT Đông Hà", "value": "1840"},
            1832: {"name": "THPT DT Nội Trú Tỉnh", "value": "1832"},
            1855: {"name": "THPT Gio Linh", "value": "1855"},
            1827: {"name": "THPT Hải Lăng", "value": "1827"},
            1849: {"name": "THPT Hướng Hoá", "value": "1849"},
            1874: {"name": "THPT Hướng Phùng", "value": "1874"},
            1850: {"name": "THPT Lao Bảo", "value": "1850"},
            1841: {"name": "THPT Lê Lợi Đông Hà", "value": "1841"},
            1847: {"name": "THPT Lê Thế Hiếu", "value": "1847"},
            1826: {"name": "THPT Nam Hải Lăng", "value": "1826"},
            1829: {"name": "THPT Nguyễn Bỉnh Khiêm", "value": "1829"},
            1860: {"name": "THPT Nguyễn Công Trứ", "value": "1860"},
            1856: {"name": "THPT Nguyễn Du", "value": "1856"},
            1833: {"name": "THPT Nguyễn Huệ", "value": "1833"},
            1877: {"name": "THPT Nguyễn Hữu Thận", "value": "1877"},
            1842: {"name": "THPT Phan Châu Trinh", "value": "1842"},
            1875: {"name": "THPT Số 2 Đakrông", "value": "1875"},
            1845: {"name": "THPT Tân Lâm", "value": "1845"},
            1828: {"name": "THPT Trần Thị Tâm", "value": "1828"},
            1835: {"name": "THPT Triệu Phong", "value": "1835"},
            1831: {"name": "THPT TX Quảng Trị", "value": "1831"},
            1837: {"name": "THPT Vĩnh Định", "value": "1837"},
            1858: {"name": "THPT Vĩnh Linh", "value": "1858"},
            1865: {"name": "TTGDTX Cam Lộ", "value": "1865"},
            1864: {"name": "TTGDTX ĐakRông", "value": "1864"},
            1866: {"name": "TTGDTX Đông Hà", "value": "1866"},
            1873: {"name": "TTGDTX Gio Linh", "value": "1870"},
            1867: {"name": "TTGDTX Hải Lăng", "value": "1867"},
            1863: {"name": "TTGDTX Hướng Hoá", "value": "1863"},
            1869: {"name": "TTGDTX Triệu Phong", "value": "1869"},
            1868: {"name": "TTGDTX TX Quảng trị", "value": "1868"},
            1871: {"name": "TTGDTX Vĩnh Linh", "value": "1871"},
            1843: {"name": "TTKTTH-HN tỉnh", "value": "1843"},
            1872: {"name": "TTKTTH-HN TX Quảng trị", "value": "1872"},
            1873: {"name": "TTKTTH-HN Vĩnh Linh", "value": "1873"}
        },
        hue: {
            1887: {"name": "Khối chuyên ĐHKH Huế", "value": "1887"},
            1912: {"name": "Khối chuyên ĐHNN Huế", "value": "1912"},
            1901: {"name": "THPT A Lưới", "value": "1901"},
            1897: {"name": "THPT An Lương Đông", "value": "1897"},
            1883: {"name": "THPT BC Đống Đa ( TT KTTH -HN Huế )", "value": "1883"},
            1907: {"name": "THPT Bình Điền", "value": "1907"},
            1882: {"name": "THPT Bùi Thị Xuân", "value": "1882"},
            1918: {"name": "THPT Cao Thắng", "value": "1918"},
            1878: {"name": "THPT chuyên Quốc Học", "value": "1878"},
            1902: {"name": "THPT Dân tộc Nội trú Tỉnh", "value": "1902"},
            1892: {"name": "THPT Đặng Huy Trứ", "value": "1892"},
            1906: {"name": "THPT Đặng Trần Côn", "value": "1906"},
            1914: {"name": "THPT DL Trần Hưng Đạo", "value": "1914"},
            1881: {"name": "THPT Gia Hội", "value": "1881"},
            1923: {"name": "THPT Hà Trung", "value": "1923"},
            1879: {"name": "THPT Hai Bà Trưng", "value": "1879"},
            1885: {"name": "THPT Hoá Châu", "value": "1885"},
            1916: {"name": "THPT Hồng Vân", "value": "1916"},
            1919: {"name": "THPT Hương Giang", "value": "1919"},
            1915: {"name": "THPT Hương Lâm", "value": "1915"},
            1895: {"name": "THPT Hương Thủy", "value": "1895"},
            1917: {"name": "THPT Hương Trà", "value": "1917"},
            1904: {"name": "THPT Hương Vinh", "value": "1904"},
            1900: {"name": "THPT Nam Đông", "value": "1900"},
            1891: {"name": "THPT Nguyễn Chí Thanh", "value": "1891"},
            1890: {"name": "THPT Nguyễn Đình Chiểu", "value": "1890"},
            1880: {"name": "THPT Nguyễn Huệ", "value": "1880"},
            1894: {"name": "THPT Nguyễn Sinh Cung", "value": "1894"},
            1922: {"name": "THPT Nguyễn Trãi", "value": "1922"},
            1884: {"name": "THPT Nguyễn Trường Tộ", "value": "1884"},
            1893: {"name": "THPT Phan Đăng Lưu", "value": "1893"},
            1888: {"name": "THPT Phong Điền", "value": "1888"},
            1896: {"name": "THPT Phú Bài", "value": "1896"},
            1899: {"name": "THPT Phú Lộc", "value": "1899"},
            1889: {"name": "THPT Tam Giang", "value": "1889"},
            1903: {"name": "THPT Thừa Lưu", "value": "1903"},
            1911: {"name": "THPT Thuận An", "value": "1911"},
            1920: {"name": "THPT Tố Hữu", "value": "1920"},
            1913: {"name": "THPT Trần Văn Kỷ", "value": "1913"},
            1921: {"name": "THPT TT Thế hệ Mới", "value": "1921"},
            1898: {"name": "THPT Vinh Lộc", "value": "1898"},
            1908: {"name": "THPT Vinh Xuân", "value": "1908"},
            1910: {"name": "Tr ĐH Nghệ thuật-Huế (hệ TC)", "value": "1910"},
            1909: {"name": "Trung cấp Phật Học Huế", "value": "1909"},
            1886: {"name": "TT GDTX TP Huế", "value": "1886"},
            1927: {"name": "TTGDTX Hương Thủy", "value": "1927"},
            1926: {"name": "TTGDTX Phú Vang", "value": "1926"},
            1925: {"name": "TTGDTX Quảng Điền", "value": "1925"}
        },
        qb: {
            1782: {"name": "phổ thông dân tộc nội trú tỉnh", "value": "1782"},
            1788: {"name": "THCS và THPT Bắc Sơn", "value": "1788"},
            1821: {"name": "THCS và THPT Dương Văn An", "value": "1821"},
            1792: {"name": "THCS và THPT Hoá Tiến", "value": "1792"},
            1822: {"name": "THCS và THPT Trung Hoá", "value": "1822"},
            1805: {"name": "THCS và THPT Việt Trung", "value": "1805"},
            1781: {"name": "THPT Bán công - Đồng Hới", "value": "1781"},
            1823: {"name": "THPT BC Bắc Quảng Trạch", "value": "1823"},
            1780: {"name": "THPT Chuyên Quảng Bình", "value": "1780"},
            1778: {"name": "THPT Đào Duy Từ, Đồng Hới", "value": "1778"},
            1779: {"name": "THPT Đồng Hới", "value": "1779"},
            1815: {"name": "THPT Hoàng Hoa Thám - Lệ Thuỷ", "value": "1815"},
            1819: {"name": "THPT KT Lệ Thuỷ", "value": "1819"},
            1814: {"name": "THPT Lệ Thuỷ", "value": "1814"},
            1786: {"name": "THPT Lê Trực-Tuyên Hoá", "value": "1786"},
            1791: {"name": "THPT Minh Hoá", "value": "1791"},
            1817: {"name": "THPT Nguyễn Chí Thanh", "value": "1817"},
            1812: {"name": "THPT Nguyễn Hữu Cảnh", "value": "1812"},
            1810: {"name": "THPT Ninh Châu - Quảng Ninh", "value": "1810"},
            1787: {"name": "THPT Phan Bội Châu- T. Hoá", "value": "1787"},
            1809: {"name": "THPT Quảng Ninh", "value": "1809"},
            1801: {"name": "THPT số 1 Bố Trạch", "value": "1801"},
            1795: {"name": "THPT số 1 Quảng Trạch", "value": "1795"},
            1802: {"name": "THPT số 2 Bố Trạch", "value": "1802"},
            1796: {"name": "THPT số 2 Quảng Trạch", "value": "1796"},
            1803: {"name": "THPT số 3 Bố Trạch", "value": "1803"},
            1797: {"name": "THPT số 3 Quảng Trạch", "value": "1797"},
            1806: {"name": "THPT số 4 Bố Trạch", "value": "1806"},
            1798: {"name": "THPT số 4 Quảng Trạch", "value": "1798"},
            1804: {"name": "THPT số 5 Bố Trạch", "value": "1804"},
            1820: {"name": "THPT số 5 Quảng Trạch", "value": "1820"},
            1816: {"name": "THPT Trần Hưng Đạo - Lệ Thuỷ", "value": "1816"},
            1785: {"name": "THPT Tuyên Hoá", "value": "1785"},
            1807: {"name": "Trung tâm GDTX Bố Trạch", "value": "1807"},
            1783: {"name": "Trung tâm GDTX Đồng Hới", "value": "1783"},
            1818: {"name": "Trung tâm GDTX Lệ Thuỷ", "value": "1818"},
            1793: {"name": "Trung tâm GDTX Minh Hoá", "value": "1793"},
            1811: {"name": "Trung tâm GDTX Quảng Ninh", "value": "1811"},
            1799: {"name": "Trung tâm GDTX Quảng Trạch", "value": "1799"},
            1789: {"name": "Trung tâm GDTX Tuyên Hoá", "value": "1789"},
            1824: {"name": "Trung tâm KTTH-HN Đồng Hới", "value": "1824"}
        },
        ht: {
            1755: {"name": "THPT Lê Quý Đôn", "value": "1755"},
            1759: {"name": "THPT Mai Thúc Loan", "value": "1759"},
            1721: {"name": "THPT Cẩm Bình", "value": "1721"},
            1720: {"name": "THPT Cẩm Xuyên", "value": "1720"},
            1730: {"name": "THPT Can Lộc", "value": "1730"},
            1743: {"name": "THPT Cao Thắng", "value": "1743"},
            1754: {"name": "THPT Chuyên Hà Tĩnh", "value": "1754"},
            1772: {"name": "THPT công lập Thành Sen", "value": "1772"},
            1775: {"name": "THPT Dân lập Nguyễn Thiếp", "value": "1775"},
            1756: {"name": "THPT DL Can Lộc", "value": "1756"},
            3496: {"name": "THPT DL Nguyễn Thiếp", "value": "3496"},
            1731: {"name": "THPT Đồng Lộc", "value": "1731"},
            1748: {"name": "THPT Đức Thọ", "value": "1748"},
            1769: {"name": "THPT Gia Phố", "value": "1769"},
            1722: {"name": "THPT Hà Huy Tập", "value": "1722"},
            1736: {"name": "THPT Hàm Nghi", "value": "1736"},
            1765: {"name": "THPT Hồng Lam", "value": "1765"},
            1750: {"name": "THPT Hồng Lĩnh", "value": "1750"},
            1735: {"name": "THPT Hương Khê", "value": "1735"},
            1740: {"name": "THPT Hương Sơn", "value": "1740"},
            1716: {"name": "THPT Kỳ Anh", "value": "1716"},
            1718: {"name": "THPT Kỳ Lâm", "value": "1718"},
            1741: {"name": "THPT Lê Hữu Trác I", "value": "1741"},
            1742: {"name": "THPT Lê Hữu Trác II", "value": "1742"},
            1768: {"name": "THPT Lê Quảng Chí", "value": "1768"},
            1727: {"name": "THPT Lý Tự Trọng", "value": "1727"},
            1763: {"name": "THPT Mai Kính", "value": "1763"},
            1746: {"name": "THPT Minh Khai", "value": "1746"},
            1732: {"name": "THPT Nghèn", "value": "1732"},
            1764: {"name": "THPT Nghi Xuân", "value": "1764"},
            1753: {"name": "THPT Nguyễn Công Trứ", "value": "1753"},
            1767: {"name": "THPT Nguyễn Đình Liễn", "value": "1767"},
            1762: {"name": "THPT Nguyễn Đổng Chi", "value": "1762"},
            1752: {"name": "THPT Nguyễn Du", "value": "1752"},
            1717: {"name": "THPT Nguyễn Huệ", "value": "1717"},
            1758: {"name": "THPT Nguyễn Thị Bích Châu", "value": "1758"},
            1728: {"name": "THPT Nguyễn Trung Thiên", "value": "1728"},
            1733: {"name": "THPT Nguyễn Văn Trỗi", "value": "1733"},
            1724: {"name": "THPT Phan Đình Phùng", "value": "1724"},
            1737: {"name": "THPT Phúc Trạch", "value": "1737"},
            1747: {"name": "THPT Trần Phú", "value": "1747"},
            1725: {"name": "THPT Tư thục chất lượng cao Hoàng Xuân Hãn", "value": "1725"},
            1760: {"name": "THPT Vũ Quang", "value": "1760"},
            1757: {"name": "THPTDL Cẩm Xuyên", "value": "1757"},
            1745: {"name": "THPTDL Đức Thọ", "value": "1745"},
            1739: {"name": "THPTDL Nguyễn Khắc Viện", "value": "1739"},
            1771: {"name": "Trung tâm KTTH-HN Cẩm xuyên", "value": "1771"},
            1770: {"name": "Trung tâm KTTH-HN Can Lộc", "value": "1770"},
            1773: {"name": "Trung tâm KTTH-HN Hương Sơn", "value": "1773"},
            1766: {"name": "TT GDTX - HNDN Thành phố Hà Tĩnh", "value": "1766"},
            1719: {"name": "TTGDTX Cẩm Xuyên", "value": "1719"},
            1729: {"name": "TTGDTX Can Lộc", "value": "1729"},
            1749: {"name": "TTGDTX Hồng Lĩnh", "value": "1749"},
            1738: {"name": "TTGDTX Hương Sơn", "value": "1738"},
            1744: {"name": "TTGDTX- KTTHHN Đức Thọ", "value": "1744"},
            1751: {"name": "TTGDTX Nghi Xuân", "value": "1751"},
            1723: {"name": "TTGDTX tỉnh Hà Tĩnh", "value": "1723"},
            1761: {"name": "TTGDTX Vũ Quang", "value": "1761"},
            1715: {"name": "TTGDTX-HN-DN Kỳ Anh", "value": "1715"},
            1734: {"name": "TTGDTX-KTTHHN Hương Khê", "value": "1734"},
            1726: {"name": "TTGDTX-KTTHHN Thạch Hà", "value": "1726"}
        },
        na: {
            1623: {"name": "Chuyên Toán ĐH Vinh", "value": "1623"},
            1633: {"name": "THPT Quỳ Hợp 2", "value": "1633"},
            1640: {"name": "THPT 1/5", "value": "1640"},
            1680: {"name": "THPT Anh Sơn 1+TTGDTX Anh Sơn", "value": "1680"},
            1681: {"name": "THPT Anh Sơn 2", "value": "1681"},
            1679: {"name": "THPT Anh Sơn 3", "value": "1679"},
            1666: {"name": "THPT Bắc Yên Thành+DL Trần Đình Phong", "value": "1666"},
            1629: {"name": "THPT BC Cửa Lò+ TS Thị Xã Cửa lò", "value": "1629"},
            1692: {"name": "THPT BC Thanh Chương +TTGDTX Thanh Chương", "value": "1692"},
            1622: {"name": "THPT Chuyên Phan Bội Châu", "value": "1622"},
            1642: {"name": "THPT Cờ Đỏ", "value": "1642"},
            1658: {"name": "THPT Con Cuông+TTGDTX con Cuông", "value": "1658"},
            1695: {"name": "THPT Đặng Thai Mai", "value": "1695"},
            1691: {"name": "THPT Đặng Thúc Hứa", "value": "1691"},
            1671: {"name": "THPT Diễn Châu 2+ THPT Tư Thục Nguyễn Du", "value": "1671"},
            1672: {"name": "THPT Diễn Châu 3+DL Quang Trung", "value": "1672"},
            1673: {"name": "THPT Diễn Châu 4", "value": "1673"},
            1678: {"name": "THPT Diễn Châu 5", "value": "1678"},
            1711: {"name": "THPT Đinh Bạt Tụy+TTGDTX Hưng Nguyên", "value": "1711"},
            1643: {"name": "THPT DL Bắc Quỳnh Lưu", "value": "1643"},
            1651: {"name": "THPT DL Cù Chính Lan+LTTrọng+TTGDTXQ Lưu", "value": "1651"},
            1687: {"name": "THPT DL Đô Lương 1", "value": "1687"},
            1688: {"name": "THPT DL Đô Lương 2", "value": "1688"},
            1627: {"name": "THPT DL Her Man", "value": "1627"},
            1628: {"name": "THPT DL Hữu Nghị+ TTGDTX Vinh", "value": "1628"},
            1667: {"name": "THPT DL Lê Doãn Nhã TTGDTX Yên Thành", "value": "1667"},
            1625: {"name": "THPT DL Lê Quí Đôn", "value": "1625"},
            1675: {"name": "THPT DL Ngô Trí Hoà+TTGDTX Diễn Châu", "value": "1675"},
            1621: {"name": "THPT DL Nguyễn Tộ", "value": "1621"},
            1626: {"name": "THPT DL Nguyễn Huệ", "value": "1626"},
            1674: {"name": "THPT DL Nguyễn Văn Tố", "value": "1674"},
            1706: {"name": "THPT DL Sào Nam+TTGDTX Nam Đàn", "value": "1706"},
            1636: {"name": "THPT DL Sông Hiếu + TTGDTX Thái Hòa", "value": "1636"},
            1684: {"name": "THPT Đô Lương 1+TTGDTX Đô Lương", "value": "1684"},
            1685: {"name": "THPT Đô Lương 2", "value": "1685"},
            1683: {"name": "THPT Đô Lương 3 + THPT Đô Lương 4", "value": "1683"},
            1637: {"name": "THPT Đông Hiếu", "value": "1637"},
            1661: {"name": "THPT DTNT Tân Kỳ", "value": "1661"},
            1624: {"name": "THPT DTNT Tỉnh+ THPT DL Nguyễn Trãi", "value": "1624"},
            1619: {"name": "THPT Hà Huy Tập", "value": "1619"},
            1650: {"name": "THPT Hoàng Mai", "value": "1650"},
            1618: {"name": "THPT Huỳnh Thúc Kháng", "value": "1618"},
            1705: {"name": "THPT Kim Liên", "value": "1705"},
            1653: {"name": "THPT Kỳ Sơn+ TTGDTX Kỳ Sơn", "value": "1653"},
            1708: {"name": "THPT Lê Hồng Phong", "value": "1708"},
            1620: {"name": "THPT Lê Viết Thuật", "value": "1620"},
            1659: {"name": "THPT Mường Quạ", "value": "1659"},
            1703: {"name": "THPT Nam Đàn 1 + THPT Tư thục Mai Hắc Đế", "value": "1703"},
            1704: {"name": "THPT Nam Đàn 2", "value": "1704"},
            1697: {"name": "THPT Nghi Lộc 1", "value": "1697"},
            1698: {"name": "THPT Nghi Lộc 2 + THPT Nghi Lộc 5", "value": "1698"},
            1696: {"name": "THPT Nghi Lộc 3", "value": "1696"},
            1701: {"name": "THPT Nghi Lộc 4", "value": "1701"},
            1649: {"name": "THPT Nguyễn Đức Mậu", "value": "1649"},
            1690: {"name": "THPT Nguyễn Sỹ Sách", "value": "1690"},
            1700: {"name": "THPT Nguyễn Thức Tự +TTGDTX Nghi Lộc", "value": "1700"},
            1677: {"name": "THPT Nguyễn Xuân Ôn", "value": "1677"},
            1709: {"name": "THPT Phạm Hồng", "value": "1709"},
            1670: {"name": "THPT Phan Đăng Lưu", "value": "1670"},
            1665: {"name": "THPT Phan Thúc Trực+THPT Nam Yên Thành", "value": "1665"},
            1713: {"name": "THPT Quế Phong+ TTGDTX Quế Phong", "value": "1713"},
            1632: {"name": "THPT Quỳ Châu", "value": "1632"},
            1634: {"name": "THPT Quỳ Hợp 1+DTNT Quỳ Hợp", "value": "1634"},
            1645: {"name": "THPT Quỳnh Lưu 1", "value": "1645"},
            1646: {"name": "THPT Quỳnh Lưu 2", "value": "1646"},
            1647: {"name": "THPT Quỳnh Lưu 3", "value": "1647"},
            1648: {"name": "THPT Quỳnh Lưu 4", "value": "1648"},
            1663: {"name": "THPT Tân Kỳ 3", "value": "1663"},
            1660: {"name": "THPT Tân Kỳ+TTGDTX Tân kỳ", "value": "1660"},
            1641: {"name": "THPT Tây Hiếu Thái Hòa", "value": "1641"},
            1639: {"name": "THPT Thái Hoà + Tuyển sinh thị xã Thái Hoà", "value": "1639"},
            1710: {"name": "THPT Thái Lão + THPT Nguyễn Tộ", "value": "1710"},
            1694: {"name": "THPT Thanh Chương 1", "value": "1694"},
            1689: {"name": "THPT Thanh Chương 3+BC Cát Ngạn", "value": "1689"},
            1655: {"name": "THPT Tương Dương 1+TTGDTX Tương Dương", "value": "1655"},
            1656: {"name": "THPT Tương Dương 2", "value": "1656"},
            1630: {"name": "THPT TX Cửa lò+TTGDTX2", "value": "1630"},
            1664: {"name": "THPT Yên Thành 2", "value": "1664"},
            1668: {"name": "THPT Yên Thành 3", "value": "1668"},
            3480: {"name": "Trường Quân sự/QK4 (Trường Bổ túc THPT của Quân đội)", "value": "3480"},
            1702: {"name": "Truyển Sinh huyện Nan đàn", "value": "1702"}
        }
    }

    var makeSchoolSelect = function (data) {
        var html = ''
        $.each(data, function (index, value) {
            html += '<option value="' + value.name + '">' + value.name + '</option>'
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
