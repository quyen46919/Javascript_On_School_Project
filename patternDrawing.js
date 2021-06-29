// Phần này của Long
// GET DOM
const board_paint = $('.board-paint');
const blur = $('#blur');
const popup = $('#popup');
const btn_paintDf = $('#default');
const iconCanvas = $('#icon-canvas');
const iconCheck = $$('.fa-check');
const txtEle = $$('.txt');
const checkedIcon = $('#checked');
const paint_img = $('.paint__img');
const displayImg = $('#displayImg');
const file_img = $('#file-image');
const popup__upload = $('.popup__upload');
const cancer_popup = $('#cancer-popup');
const show_popup = $('.paint__show-popup');
const default_canvas = $('.paint__default-canvas');
const popup__over = $('.popup__over');
const btn_prev = $('.popup__btn-prev');
const btn_next = $('.popup__btn-next');
const select_theme = $('#select-theme');
const select_decorate = $('#select-decorate');
const popup__slider = $('.popup__slider');
/*End DOM*/

/* VARIABLES */
const arrImgs1 = [
    {
        title: 'House',
        valueImg: [
            {
                urlImg: 'https://fsfamily.vn/wp-content/uploads/2019/06/mau-tranh-to-mau-ngoi-nha-dep-nhat-cho-be-luyen-to-mau-tai-nha.jpg',
                nameImg: 'Nhà 1',
                status: 'No Color',
            },
            {
                urlImg: 'https://img2.thuthuat123.com/uploads/2019/11/19/tranh-to-mau-hinh-ngoi-nha-danh-cho-be_023438051.jpg',
                nameImg: 'Nhà 2',
                status: 'No Color',
            },

            {
                urlImg: 'https://2.bp.blogspot.com/-IMReWAuQ73E/Xm8gTStU4NI/AAAAAAAABCQ/9xL0JCqC3hI3re_LFxU8ZF9yH2evRhHSwCLcBGAsYHQ/s1600/Coloring-for-kids-dogs-85984.jpg',
                nameImg: 'Nhà 3',
                status: 'No Color',
            },
            {
                urlImg: 'https://zicxabooks.com/vi/tri-thuc/wp-content/uploads/2020/07/hinh-to-mau-ngoi-nha14.jpg',
                nameImg: 'Nhà 4',
                status: 'No Color',
            },
            {
                urlImg: 'https://img2.thuthuatphanmem.vn/uploads/2018/11/30/tranh-tap-to-mau-ngoi-nha-cua-be_104012884.jpg',
                nameImg: 'Nhà 5',
                status: 'No Color',
            },

            {
                urlImg: 'https://img2.thuthuat123.com/uploads/2019/11/19/anh-ngoi-nha-xinh-dep-de-be-to-mau_023436708.jpg',
                nameImg: 'Nhà 6',
                status: 'No Color',
            },
            {
                urlImg: 'https://file.vfo.vn/hinh/2018/05/tranh-ve-ngoi-nha-dep-don-gian-ngoi-nha-mo-uoc-hanh-phuc-hinh-ve-truong-hoc-1.png',
                nameImg: 'Nhà 7',
                status: 'No Color',
            },
            {
                urlImg: 'https://fsfamily.vn/wp-content/uploads/2019/06/mau-tranh-to-mau-ngoi-nha-dep-nhat-cho-be-luyen-to-mau-tai-nha.jpg',
                nameImg: 'Nhà 1',
                status: 'No Color',
            },
            {
                urlImg: 'https://img2.thuthuat123.com/uploads/2019/11/19/tranh-to-mau-hinh-ngoi-nha-danh-cho-be_023438051.jpg',
                nameImg: 'Nhà 2',
                status: 'No Color',
            },
        ],
    },
    {
        title: 'Doraemon',
        valueImg: [
            {
                urlImg: 'https://i.pinimg.com/originals/b2/3d/28/b23d2843aea9c93dc06f14e4f724cf81.jpg',
                nameImg: 'Doraemon 1',
                status: 'No Color',
            },
            {
                urlImg: 'https://zicxabooks.com/vi/tri-thuc/wp-content/uploads/2020/07/Tong-hop-cac-buc-tranh-to-mau-doremon-dep-nhat-52-1.jpg',
                nameImg: 'Doraemon 2',
                status: 'No Color',
            },

            {
                urlImg: 'https://blog.dochoiphulong.com/wp-content/uploads/2019/04/tranh-to-mau-doraemon-2.jpg',
                nameImg: 'Doraemon 3',
                status: 'No Color',
            },
            {
                urlImg: 'https://zicxabooks.com/vi/tri-thuc/wp-content/uploads/2020/07/Tong-hop-cac-buc-tranh-to-mau-doremon-dep-nhat-10-2.jpg',
                nameImg: 'Doraemon 4',
                status: 'No Color',
            },
            {
                urlImg: 'https://imgt.taimienphi.vn/cf/Images/ptx/2019/1/2/tranh-to-mau-doraemon-2.jpg',
                nameImg: 'Doraemon 5',
                status: 'No Color',
            },

            {
                urlImg: 'https://o.rada.vn/data/image/2018/11/21/tranh-3.png',
                nameImg: 'Doraemon 6',
                status: 'No Color',
            },
            {
                urlImg: 'https://dean2020.edu.vn/wp-content/uploads/2018/10/doreami.jpg',
                nameImg: 'Doraemon 7',
                status: 'No Color',
            },
            {
                urlImg: 'https://i.pinimg.com/originals/b2/3d/28/b23d2843aea9c93dc06f14e4f724cf81.jpg',
                nameImg: 'Doraemon 1',
                status: 'No Color',
            },
            {
                urlImg: 'https://zicxabooks.com/vi/tri-thuc/wp-content/uploads/2020/07/Tong-hop-cac-buc-tranh-to-mau-doremon-dep-nhat-52-1.jpg',
                nameImg: 'Doraemon 2',
                status: 'No Color',
            },
        ],
    },
    {
        title: 'Vehicle',
        valueImg: [
            {
                urlImg: 'https://zicxabooks.com/vi/tri-thuc/wp-content/uploads/2020/07/to-mau-oto3.jpg',
                nameImg: 'Xe LamBo',
                status: 'No Color',
            },
            {
                urlImg: 'https://quachobe.vn/wp-content/uploads/2020/01/TE1BB95ng-hE1BBA3p-cC3A1c-bE1BBA9c-tranh-tC3B4-mC3A0u-cho-bC3A9-trai-C491E1BAB9p-48.jpg',
                nameImg: 'Xe Ô Tô',
                status: 'No Color',
            },

            {
                urlImg: 'https://cdn.doctailieu.com/images/2018/05/07/anh-10-hinh-o-to-den-trang-cho-be-tap-to-mau-kich-thich-sang-tao-4-rs650.jpg',
                nameImg: 'Xe Đua',
                status: 'No Color',
            },
            {
                urlImg: 'https://icapi.org/wp-content/uploads/2019/11/tranh-to-mau-o-to-8.jpg',
                nameImg: 'Xe Cảnh Sát',
                status: 'No Color',
            },
            {
                urlImg: 'https://meocuchay.com/wp-content/uploads/2020/08/T%E1%BB%95ng-h%E1%BB%A3p-c%C3%A1c-b%E1%BB%A9c-tranh-t%C3%B4-m%C3%A0u-xe-%C4%91%E1%BA%A1p-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-d%C3%A0nh-t%E1%BA%B7ng-cho-b%C3%A951.png',
                nameImg: 'Xe Đạp',
                status: 'No Color',
            },
            {
                urlImg: 'https://zicxaphotos.com/wp-content/uploads/2019/08/T%E1%BB%95ng-h%E1%BB%A3p-c%C3%A1c-b%E1%BB%A9c-tranh-t%C3%B4-m%C3%A0u-xe-m%C3%A1y-%C4%91%E1%BA%B9p-38.jpg',
                nameImg: 'Xe Mô Tô',
                status: 'No Color',
            },
            {
                urlImg: 'https://lh3.googleusercontent.com/pw/ACtC-3cbv7Acl3BKMS_NkKUGSYit2XpuwHfMgzgiV5O5W1VnfUWe_gRkRNS9CD1DZpZLj_UmG6nsjjjAt6ypS3tF9I82b7bMmypyFjT4mllNvhIB2NnJ3JY1WuK7foO3xvGO2SjA5jXx0ow5rp1HyWOWIXbU=w700-h460-no?authuser=0',
                nameImg: 'Xe Cổ',
                status: 'No Color',
            },
            {
                urlImg: 'https://zicxabooks.com/vi/tri-thuc/wp-content/uploads/2020/07/to-mau-oto3.jpg',
                nameImg: 'Xe LamBo',
                status: 'No Color',
            },
            {
                urlImg: 'https://quachobe.vn/wp-content/uploads/2020/01/TE1BB95ng-hE1BBA3p-cC3A1c-bE1BBA9c-tranh-tC3B4-mC3A0u-cho-bC3A9-trai-C491E1BAB9p-48.jpg',
                nameImg: 'Xe Ô Tô',
                status: 'No Color',
            },
        ],
    },
    {
        title: 'Animals',
        valueImg: [
            {
                urlImg: 'https://dean2020.edu.vn/wp-content/uploads/2018/10/tranh-to-mau-cho-be-36-1024x768.jpg',
                nameImg: 'Con Bò',
                status: 'No Color',
            },
            {
                urlImg: 'https://nghethuatamnhacsaigon.com/wp-content/uploads/2018/10/tranh-to-mau-con-sau.jpg',
                nameImg: 'Con Sâu',
                status: 'No Color',
            },
            {
                urlImg: 'https://img2.thuthuatphanmem.vn/uploads/2018/12/05/be-tap-to-mau-khung-long-bao-chua_090349069.jpg',
                nameImg: 'Khủng Long Bạo Chúa',
                status: 'No Color',
            },
            {
                urlImg: 'https://3.bp.blogspot.com/-71ioOPrIgek/XnsVG-mNYCI/AAAAAAAACDM/X93eJN6x3SEhfriDaPl06Eakye5tnvZ2ACLcBGAsYHQ/s1600/tranh-cho-be-to-mau-con-ky-lan-9.jpg',
                nameImg: 'Con Kì Lân',
                status: 'No Color',
            },
            {
                urlImg: 'https://zicxabooks.com/vi/tri-thuc/wp-content/uploads/2020/08/to-mau-con-tho40.jpg',
                nameImg: 'Con Thỏ',
                status: 'No Color',
            },
            {
                urlImg: 'https://4.bp.blogspot.com/-V-HrquW62ys/XnsN0s2n0PI/AAAAAAAACA0/n5QvARwje0YF69orHopI1jePGn8wPqgEQCLcBGAsYHQ/s1600/tranh-cho-be-to-mau-con-rua-va-cay-rong.jpg',
                nameImg: 'Con Rùa & Cây Rong Biển',
                status: 'No Color',
            },
            {
                urlImg: 'https://e.dowload.vn/data/image/2018/05/05/Tranh-to-mau-con-vat.jpg',
                nameImg: 'Con Mèo',
                status: 'No Color',
            },
            {
                urlImg: 'https://dean2020.edu.vn/wp-content/uploads/2018/10/tranh-to-mau-cho-be-36-1024x768.jpg',
                nameImg: 'Con Bò',
                status: 'No Color',
            },
            {
                urlImg: 'https://nghethuatamnhacsaigon.com/wp-content/uploads/2018/10/tranh-to-mau-con-sau.jpg',
                nameImg: 'Con Sâu',
                status: 'No Color',
            },
        ],
    },
    {
        title: 'Fruits',
        valueImg: [
            {
                urlImg: 'https://gonhub.com/wp-content/uploads/2019/04/tong-hop-100-mau-tranh-to-mau-trai-cay-hoa-qua-dep-nhat-cho-be-75.jpg',
                nameImg: 'Trái Cherri',
                status: 'No Color',
            },
            {
                urlImg: 'https://vectormienphi.com/wp-content/uploads/2020/02/T%E1%BB%95ng-h%E1%BB%A3p-c%C3%A1c-b%E1%BB%A9c-tranh-t%C3%B4-m%C3%A0u-qu%E1%BA%A3-%C4%91u-%C4%91%E1%BB%A7-cho-b%C3%A9-t%E1%BA%ADp-t%C3%B4-6.jpg',
                nameImg: 'Trái Đu Đủ',
                status: 'No Color',
            },
            {
                urlImg: 'https://i.pinimg.com/originals/b6/64/3f/b6643fb0a4c7f2dabacfdd7253b33fcb.jpg',
                nameImg: 'Trái Táo',
                status: 'No Color',
            },
            {
                urlImg: 'https://cdn.doctailieu.com/images/2018/04/06/15-tranh-to-mau-qua-dau-tay-sieu-de-thuong-4.jpg',
                nameImg: 'Trái Dâu',
                status: 'No Color',
            },
            {
                urlImg: 'https://img2.thuthuatphanmem.vn/uploads/2018/12/05/tranh-cho-be-tap-to-mau-trai-cay_090514528.jpg',
                nameImg: 'Trái Lê',
                status: 'No Color',
            },
            {
                urlImg: 'https://vectormienphi.com/wp-content/uploads/2020/02/T%E1%BB%95ng-h%E1%BB%A3p-c%C3%A1c-b%E1%BB%A9c-tranh-t%C3%B4-m%C3%A0u-qu%E1%BA%A3-d%C6%B0a-h%E1%BA%A5u-cho-b%C3%A9-t%E1%BA%ADp-t%C3%B4-4.jpg',
                nameImg: 'Trái Dưa Hấu',
                status: 'No Color',
            },
            {
                urlImg: 'https://meocuchay.com/wp-content/uploads/2020/08/thoa-suc-sang-tao-voi-bo-tranh-to-mau-rau-cu-qua-cho-be-yeu-tap-to-scaled.jpg',
                nameImg: 'Trái Mướp',
                status: 'No Color',
            },
            {
                urlImg: 'https://gonhub.com/wp-content/uploads/2019/04/tong-hop-100-mau-tranh-to-mau-trai-cay-hoa-qua-dep-nhat-cho-be-75.jpg',
                nameImg: 'Trái Cherri',
                status: 'No Color',
            },
            {
                urlImg: 'https://vectormienphi.com/wp-content/uploads/2020/02/T%E1%BB%95ng-h%E1%BB%A3p-c%C3%A1c-b%E1%BB%A9c-tranh-t%C3%B4-m%C3%A0u-qu%E1%BA%A3-%C4%91u-%C4%91%E1%BB%A7-cho-b%C3%A9-t%E1%BA%ADp-t%C3%B4-6.jpg',
                nameImg: 'Trái Đu Đủ',
                status: 'No Color',
            },
        ],
    },
];
const arrImgs2 = [
    {
        title: 'House',
        valueImg: [
            {
                urlImg: 'https://static2.yan.vn/YanNews/202006/202006101007225940-2b04b0c6-3b6a-427f-95d2-1c0d5bd6ae22.jpeg',
                nameImg: 'Nhà 1',
                status: 'Colorful',
            },
            {
                urlImg: 'https://media.ex-cdn.com/EXP/media.homeaz.vn/files/content/2019/06/06/nha-anime-1-1409.jpeg',
                nameImg: 'Nhà 2',
                status: 'Colorful',
            },

            {
                urlImg: 'https://fanclubanimecartoonmanga.files.wordpress.com/2015/12/getimage.jpg',
                nameImg: 'Nhà 3',
                status: 'Colorful',
            },
            {
                urlImg: 'https://photographer.com.vn/wp-content/uploads/2020/08/1597004111_Tranh-to-mau-ngoi-nha-cua-be-that-dep-va.jpg',
                nameImg: 'Nhà 4',
                status: 'Colorful',
            },
            {
                urlImg: 'https://img.thuthuatphanmem.vn/uploads/2018/10/08/hinh-anh-ve-ngoi-nha-dep_094009652.jpg',
                nameImg: 'Nhà 5',
                status: 'Colorful',
            },

            {
                urlImg: 'https://static2.yan.vn/YanNews/202006/202006101007225940-2b04b0c6-3b6a-427f-95d2-1c0d5bd6ae22.jpeg',
                nameImg: 'Nhà 1',
                status: 'Colorful',
            },
            {
                urlImg: 'https://media.ex-cdn.com/EXP/media.homeaz.vn/files/content/2019/06/06/nha-anime-1-1409.jpeg',
                nameImg: 'Nhà 2',
                status: 'Colorful',
            },
        ],
    },
    {
        title: 'Doraemon',
        valueImg: [
            {
                urlImg: 'https://file.hstatic.net/1000159991/file/doremon2-min_208c99d4e9ab4a1e98e5d8ba58a9d6e0_grande.jpg',
                nameImg: 'Doraemon 1',
                status: 'Colorful',
            },
            {
                urlImg: 'https://i.pinimg.com/originals/69/41/6a/69416a07f480c00ae1b1b2585b298809.png',
                nameImg: 'Doraemon 2',
                status: 'Colorful',
            },

            {
                urlImg: 'https://tinnhanhplus.com/wp-content/uploads/2020/11/hinh-anh-doremon-xin-chao.jpg',
                nameImg: 'Doraemon 3',
                status: 'Colorful',
            },
            {
                urlImg: 'https://hopamchuan.com/node/get_artist_image/doremon',
                nameImg: 'Doraemon 4',
                status: 'Colorful',
            },
            {
                urlImg: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-doremon-ngau-nhat.png',
                nameImg: 'Doraemon 5',
                status: 'Colorful',
            },

            {
                urlImg: 'https://file.hstatic.net/1000159991/file/doremon2-min_208c99d4e9ab4a1e98e5d8ba58a9d6e0_grande.jpg',
                nameImg: 'Doraemon 1',
                status: 'Colorful',
            },
            {
                urlImg: 'https://i.pinimg.com/originals/69/41/6a/69416a07f480c00ae1b1b2585b298809.png',
                nameImg: 'Doraemon 2',
                status: 'Colorful',
            },
        ],
    },
    {
        title: 'Vehicle',
        valueImg: [
            {
                urlImg: 'https://png.pngtree.com/png-clipart/20190617/original/pngtree-blue-motorcycle-blue-camera-cartoon-illustration-hand-drawn-spring-equinox-illustration-png-image_3875566.jpg',
                nameImg: 'Xe 1',
                status: 'Colorful',
            },
            {
                urlImg: 'https://png.pngtree.com/png-clipart/20190611/original/pngtree-vector-man-riding-a-motorcycle-png-image_2825281.jpg',
                nameImg: 'Xe 2',
                status: 'Colorful',
            },

            {
                urlImg: 'https://s1.storage.2banh.vn/image/2017/07/phan-2-bo-anh-xe-honda-winner-150-voi-phong-cach-hoat-hinh-chibi-doc-dao-46695-1499787634-5964f1720e9ed.png',
                nameImg: 'Xe 3',
                status: 'Colorful',
            },
            {
                urlImg: 'https://cdn.pixabay.com/photo/2021/02/18/11/30/build-6026885_960_720.png',
                nameImg: 'Xe 4',
                status: 'Colorful',
            },
            {
                urlImg: 'https://i.ytimg.com/vi/5bNx-Adbz5c/maxresdefault.jpg',
                nameImg: 'Xe 5',
                status: 'Colorful',
            },
            {
                urlImg: 'https://cdn.pixabay.com/photo/2014/04/03/10/00/tractor-309551_960_720.png',
                nameImg: 'Xe 6',
                status: 'Colorful',
            },

            {
                urlImg: 'https://png.pngtree.com/png-clipart/20190617/original/pngtree-blue-motorcycle-blue-camera-cartoon-illustration-hand-drawn-spring-equinox-illustration-png-image_3875566.jpg',
                nameImg: 'Xe 1',
                status: 'Colorful',
            },
            {
                urlImg: 'https://png.pngtree.com/png-clipart/20190611/original/pngtree-vector-man-riding-a-motorcycle-png-image_2825281.jpg',
                nameImg: 'Xe 2',
                status: 'Colorful',
            },
        ],
    },
    {
        title: 'Animals',
        valueImg: [
            {
                urlImg: 'https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-cartoon-cute-animal-frog-image-with-commercial-elements-frog-png-image_585937.jpg',
                nameImg: 'Con Ếch',
                status: 'Colorful',
            },
            {
                urlImg: 'https://i.pinimg.com/originals/39/bd/ab/39bdab77c8660d83c0bd7f3c165c0272.jpg',
                nameImg: 'Con Sư Tử',
                status: 'Colorful',
            },
            {
                urlImg: 'https://banner2.cleanpng.com/20180221/zue/kisspng-stock-photography-royalty-free-animal-clip-art-cartoon-tiger-5a8d7392890564.1182720915192196025613.jpg',
                nameImg: 'Con Hổ',
                status: 'Colorful',
            },
            {
                urlImg: 'https://i.pinimg.com/originals/a4/a4/e2/a4a4e28f96668ee64578407a1754b604.jpg',
                nameImg: 'Con Chó',
                status: 'Colorful',
            },
            {
                urlImg: 'https://static2.yan.vn/YanNews/2167221/201704/20170412-053503-mickey_mouse_as_mike_brady_600x654.jpg',
                nameImg: 'Con Chuột',
                status: 'Colorful',
            },
            {
                urlImg: 'https://tailieu.vn/image/template/thumbnail/2013/20130715/738/thumb/661x347/738__6681-2013-07-15-180940.jpg',
                nameImg: 'Con Bò',
                status: 'Colorful',
            },
            {
                urlImg: 'https://photographer.com.vn/wp-content/uploads/2020/09/1601228080_716_Tong-hop-hinh-anh-hoat-hinh-ngo-nghinh-dang-yeu.jpg',
                nameImg: 'Con Cáo',
                status: 'Colorful',
            },
            {
                urlImg: 'https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-cartoon-cute-animal-frog-image-with-commercial-elements-frog-png-image_585937.jpg',
                nameImg: 'Con Ếch',
                status: 'Colorful',
            },
            {
                urlImg: 'https://i.pinimg.com/originals/39/bd/ab/39bdab77c8660d83c0bd7f3c165c0272.jpg',
                nameImg: 'Con Sư Tử',
                status: 'Colorful',
            },
        ],
    },
    {
        title: 'Fruits',
        valueImg: [
            {
                urlImg: 'https://cdn.pixabay.com/photo/2020/06/17/12/33/peach-5309315_960_720.png',
                nameImg: 'Trái Cam',
                status: 'Colorful',
            },
            {
                urlImg: 'https://png.pngtree.com/png-clipart/20190706/original/pngtree-cartoon-hand-drawn-cute-fruit-smiley-png-image_4381234.jpg',
                nameImg: 'Trái Dứa',
                status: 'Colorful',
            },
            {
                urlImg: 'https://cdn.pixabay.com/photo/2020/06/05/07/58/apple-5261894_960_720.png',
                nameImg: 'Trái Táo',
                status: 'Colorful',
            },
            {
                urlImg: 'https://img.pikbest.com/png-images/qiantu/cartoon-fruit-cute-image-pomegranate-vector_2685700.png!c1024wm0/compress/true/progressive/true/format/webp/fw/1024',
                nameImg: 'Trái Lựu',
                status: 'Colorful',
            },
            {
                urlImg: 'https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-yellow-crystal-pear-icon-image_1277519.jpg',
                nameImg: 'Trái Lê',
                status: 'Colorful',
            },
            {
                urlImg: 'https://cdn.pixabay.com/photo/2020/06/17/12/33/watermelon-5309313_960_720.png',
                nameImg: 'Trái Dưa Hấu',
                status: 'Colorful',
            },
            {
                urlImg: 'https://us.123rf.com/450wm/thodoristibilis/thodoristibilis1311/thodoristibilis131100015/23471591-phim-ho%E1%BA%A1t-h%C3%ACnh-%C4%91i%C3%AAn-chu%E1%BB%91i-v%C3%A0ng-v%E1%BA%ADt-tr%C3%A1i-v%E1%BB%9Bi-chu%E1%BB%91i-sao-nh%E1%BA%A3y-m%E1%BA%AFt-%C4%91i.jpg?ver=6',
                nameImg: 'Trái Chuối',
                status: 'Colorful',
            },
            {
                urlImg: 'https://cdn.pixabay.com/photo/2020/06/17/12/33/peach-5309315_960_720.png',
                nameImg: 'Trái Cam',
                status: 'Colorful',
            },
            {
                urlImg: 'https://png.pngtree.com/png-clipart/20190706/original/pngtree-cartoon-hand-drawn-cute-fruit-smiley-png-image_4381234.jpg',
                nameImg: 'Trái Dứa',
                status: 'Colorful',
            },
        ],
    },
];
var arrBoxVal = [];
/*ENd VARIABLES*/

/*FUNCTIONS*/
// đặt dữ liệu cho popup slider
function setDataBgSlile(themeVal = 'Animals', arrImgsVal) {
    arrBoxVal.push(arrImgsVal);
    // phân tích và xử lý dữ liệu đầu vào
    for (let i = 1; i < arrBoxVal.length; i++) {
        if (typeof arrBoxVal[0] === 'undefined') {
            arrBoxVal[0] = arrImgs1;
        }
        if (typeof arrBoxVal[i] === 'undefined') {
            arrBoxVal.splice(i, 1);
        }
    }
    arrImgs = arrBoxVal[arrBoxVal.length - 1];

    //tạo băng chuyền slider + gán active cho slide, bước này phức tạp vãi lều
    function moveSlider(theme, arrBox) {
        for (let i = 0; i < arrImgs.length; i++) {
            if (arrImgs[i].title == theme) {
                const slideLeng = arrImgs[i].valueImg.length - 1;
                arrBox[0].setAttribute('id', 'lastClone');
                arrBox[slideLeng].setAttribute('id', 'firstClone');
            }
        }

        let counter = 1;
        const sizeSlide = arrBox[0].clientHeight;
        arrBox[1].classList.add('active');
        popup__over.style.transform =
            'translateY(' + -sizeSlide * counter + 'px)';
        function setActiveSlider(n) {
            arrBox[n].classList.add('active');
        }
        //xác định slide nào đang là active
        function getActiveSlider() {
            for (let i = 1; i < arrBox.length - 1; i++) {
                if (arrBox[i].classList.value == 'popup__slide active') {
                    for (let j = 0; j < arrImgs.length; j++) {
                        const slideLeng = arrImgs[j].valueImg.length;
                        for (let n = 0; n < slideLeng; n++) {
                            if (
                                arrBox[i].getAttribute('data-urlImg') ==
                                arrImgs[j].valueImg[n].urlImg
                            ) {
                                handleHoverPopupNote(arrImgs[j].valueImg[n]);
                            }
                        }
                    }
                    break;
                }
            }
        }
        getActiveSlider();
        //Tạo nút bấm di chuyển slide
        btn_prev.onclick = () => {
            if (counter >= arrBox.length - 1) return;
            popup__over.style.transition = 'transform 0.6s ease-in-out';
            removeClassActive(arrBox.length - 1, counter);
            counter++;
            setActiveSlider(counter);
            getActiveSlider();
            popup__over.style.transform =
                'translateY(' + -sizeSlide * counter + 'px)';
        };
        btn_next.onclick = () => {
            if (counter <= 0) return;
            popup__over.style.transition = 'transform 0.6s ease-in-out';
            removeClassActive(0, counter);
            counter--;
            setActiveSlider(counter);
            getActiveSlider();
            popup__over.style.transform =
                'translateY(' + -sizeSlide * counter + 'px)';
        };
        function removeClassActive(numDf, counter) {
            popup__slider.classList.remove('active');
            arrBox[numDf].classList.remove('active');
            arrBox[counter].classList.remove('active');
        }
        popup__over.addEventListener('transitionend', () => {
            if (arrBox[counter].id == 'lastClone') {
                popup__over.style.transition = 'none';
                counter = arrBox.length - 2;
                popup__over.style.transform =
                    'translateY(' + -sizeSlide * counter + 'px';
            }
            if (arrBox[counter].id == 'firstClone') {
                popup__over.style.transition = 'none';
                counter = arrBox.length - counter;
                popup__over.style.transform =
                    'translateY(' + -sizeSlide * counter + 'px';
            }
        });
    }

    //lấy ra title, theme của từng slide rồi gán nó vào note
    var arrNoteP = [];
    function handleHoverPopupNote(imgVal) {
        let titleTheme = '';
        //cái ni lấy Theme của slider đó
        for (let i = 0; i < arrImgs.length; i++) {
            if (arrImgs[i].title == themeVal) {
                for (let j = 0; j < arrImgs[i].valueImg.length; j++) {
                    if (arrImgs[i].valueImg[j] == imgVal) {
                        titleTheme = arrImgs[i].title;
                    }
                }
            }
        }
        // tạo note rồi gán giá trị cho note đó
        if (popup) {
            const popup__note = document.createElement('div');
            popup__note.classList.add(`popup__note`);
            const noteEle = `<h2>${imgVal.nameImg}</h2>
                                     <span>${imgVal.status}</span>
                                     <span>Chủ đề: ${titleTheme}</span>`;
            popup__note.innerHTML = noteEle;
            popup.appendChild(popup__note);
            arrNoteP.push(popup__note);
            if (arrNoteP.length >= 1) {
                for (let i = 0; i < arrNoteP.length; i++) {
                    if (i < arrNoteP.length - 1) {
                        popup.removeChild(arrNoteP[i]);
                        arrNoteP.splice(i, 1);
                    }
                }
            }
        }
        // tạo hiệu ứng trượt cho note, nhìn cho nó ảo
        let t,
            hoverTime = 1000;
        function setTimeOutNotePopup() {
            const popup_note = $$('.popup__note');
            popup__slider.onmouseover = function () {
                t = setTimeout(setTimeOutNote, hoverTime);
            };
            function setTimeOutNote() {
                popup_note[popup_note.length - 1].setAttribute('id', 'active');
            }
            popup__slider.onmouseout = function () {
                clearTimeout(t);
                popup_note[popup_note.length - 1].setAttribute('id', '');
            };
        }
        setTimeOutNotePopup();
    }
    //Tạo những slide từ data
    function setSliderOver() {
        if (popup__over) {
            let arrBox = [];
            for (let i = 0; i < arrImgs.length; i++) {
                if (arrImgs[i].title === themeVal) {
                    const slideLeng = arrImgs[i].valueImg.length;
                    for (let j = 0; j < slideLeng; j++) {
                        const popup__slide = document.createElement('div');
                        popup__slide.classList.add(`popup__slide`);

                        popup__slide.setAttribute(
                            'data-urlImg',
                            arrImgs[i].valueImg[j].urlImg,
                        );

                        arrBox.push(popup__slide);

                        const imgEle = `<img class="popup__img" src=${arrImgs[i].valueImg[j].urlImg} alt=${arrImgs[i].valueImg[j].nameImg}>`;
                        popup__slide.innerHTML = imgEle;
                        popup__over.appendChild(popup__slide);
                    }
                }
            }
            moveSlider(themeVal, arrBox);
            handleImageOnCanvas(arrBox);
        }
    }
    getSelecttheme();
    setSliderOver();
    getSelectdecorate();
}
//xoá các note đã tồn tại đi thay bằng note của hiện tại
function removeChildNote() {
    const popup_note = $$('.popup__note');
    console.log(popup_note.length);
    if (popup_note.length >= 1) {
        for (let i = 0; i < popup_note.length; i++) {
            if (i < popup_note.length - 1) {
                popup_note[i].remove();
                console.log(popup_note[i]);
            }
        }
    }
}
//xoá các slide của hiện tại đi
function removeChildEle() {
    popup__over.textContent = '';
}

// tạo select tuỳ chọn cho người dùng
var themeVal = 'Animals';
var decorateVal;

function getSelecttheme(arrImgs) {
    //select này giúp chọn chủ đề
    select_theme.onchange = function () {
        themeVal = select_theme.options[select_theme.selectedIndex].value;
        removeChildEle();
        removeChildNote();
        getSelectdecorate(themeVal);
        setDataBgSlile(themeVal, arrImgs);
        popup__slider.classList.remove('active');
    };
}
function getSelectdecorate(themeVal) {
    //select này giúp chọn có màu hay ko có màu
    select_decorate.onchange = function () {
        var decorateVal =
            select_decorate.options[select_decorate.selectedIndex].value;
        removeChildEle();
        popup__slider.classList.remove('active');
        select_theme.value = 'Animals';
        switch (decorateVal) {
            case 'Colorful':
                getSelecttheme(arrImgs2);
                setDataBgSlile(themeVal, arrImgs2);
                break;
            case 'No Color':
                setDataBgSlile(themeVal, arrImgs1);
                getSelecttheme(arrImgs1);
                break;
        }
    };
}
setDataBgSlile('Animals', arrImgs1);

// cài hình ảnh vào cho canvas
function setBgBoardPaint(imgUrl) {
    if (imgUrl === '') {
        paint_img.src = imgUrl;
    } else if (typeof imgUrl == 'object') {
        paint_img.src = URL.createObjectURL(imgUrl);
    } else {
        paint_img.src = imgUrl;
    }
    conditionHideButton(imgUrl);
}
conditionHideButton('');
//tạo nút đóng mở popup
function toggle() {
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    popup__slider.classList.remove('active');
    table_geometry.classList.remove('active');
    removePopup();
    clearCanvas();
    getImgBg();
    clearBgImgDisplayImg();
}

// đóng popup từ ngoài body
function removePopup() {
    window.onclick = (e) => {
        if (!e.target.closest('#popup') && !e.target.closest('#default')) {
            blur.classList.remove('active');
            popup.classList.remove('active');
        }
    };
}

//  lấy dữ liệu ảnh từ người dùng
function getImgBg() {
    document
        .querySelector('input[type="file"]')
        .addEventListener('change', function () {
            if (this.files && this.files[0]) {
                displayImg.onload = () => {
                    URL.revokeObjectURL(displayImg.src);
                };

                arrAdress = this.files[0].name;
                // đặt điều kiện chỉ những file có đuôi này mới được show
                let ReImage = /\.jpg|\.png|\.jpeg|\.gif/g;

                if (ReImage.test(arrAdress)) {
                    setDefaultDisplayImg(this.files[0]);
                }
            }
        });
}

// đặt lại hình nền khi người dùng bấm thoát
function clearBgImgDisplayImg() {
    displayImg.src = {};
    file_img.style.display = 'block';
    popup__upload.classList.remove('active');
}

// tạo nút vẽ theo mặc định
function setDefaultDisplayImg(imgImage) {
    popup__slider.classList.remove('active');
    displayImg.src = URL.createObjectURL(imgImage);
    file_img.style.display = 'none';
    popup__upload.classList.add('active');
    isCheckBtn = true;
    dispatchImg(imgImage);
}

// thông báo khi người dùng chọn vẽ theo mặc định
function setBgBoardPaintDefault() {
    const isSet = confirm('Bạn sẽ phải vẻ lại từ đầu nếu chọn Vẽ Mặc Định 😥');
    if (isSet === true) {
        setBgBoardPaint('');
        clearCanvas();
    }
}
function conditionHideButton(imgUrl) {
    console.log(imgUrl);

    if (imgUrl == '') {
        default_canvas.disabled = true;
    } else {
        default_canvas.disabled = false;

        default_canvas.addEventListener('click', setBgBoardPaintDefault, false);
    }
}
// tạo hiệu ứng chọn ảnh cho người dùng biết
function handleImageOnCanvas(slideEle) {
    for (let i = 0; i < slideEle.length; i++) {
        slideEle[i].onclick = function () {
            var imgUrl = slideEle[i].getAttribute('data-urlImg');
            popup__slider.classList.add('active');

            popup__upload.classList.remove('active');
            popup__slider.style.transition = '0.15s';
            isCheckBtn = true;
            dispatchImg(imgUrl);
        };
    }
}

// gửi url hình ảnh + thông báo khi người dùng chưa chọn ảnh mà click
function dispatchImg(imgUrl) {
    checkedIcon.onclick = function (e) {
        if (isCheckBtn) {
            isCheckBtn = false;
            getImgBg(isCheckBtn);
            setBgBoardPaint(imgUrl);
            toggle();
        } else {
            alert('Bạn Cần Chọn 1 Ảnh Mẫu Để Vẽ 🤗');
            e.preventDefault();
        }
    };
}
dispatchImg();

// add event to call functions
cancer_popup.addEventListener('click', toggle, false);
show_popup.addEventListener('click', toggle, false);
