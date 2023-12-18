import { list } from "./Type";
import anh1 from "../assets/MonHeo/suon.png";
import suonNuong from "../assets/MonHeo/suon.png";
import suonBiCha from "../assets/MonHeo/SuonBiCha.png";
import lapXuong from "../assets/MonHeo/LapXuong.jpg";
import suonCay from "../assets/MonHeo/SuonCay.jpg";
import suonCha from "../assets/MonHeo/SuonCha.png";
import suonBi from "../assets/MonHeo/SườnBi.png";
import thitKhoTieu from "../assets/MonHeo/thit_kho_tieu.jpg";
import thitKhoHoiVit from "../assets/MonHeo/TKOHV.jpg";
import gaDui from "../assets/MonGa/gadui.jpg";
import gaCanh from "../assets/MonGa/ga canh.jpg";
import gaKhoGung from "../assets/MonGa/Ga Kho gung.jpg";
import gaRoTy from "../assets/MonGa/garoty.jpg";
import gaRutXuong from "../assets/MonGa/garutxuong.jpg";
import gaXao from "../assets/MonGa/gaxaoxaot.jpg";
import caBongTrung from "../assets/Monca/Ca-bong-trung.jpg";
import caComChien from "../assets/Monca/ca_com_chien.jpg";
import caCheChien from "../assets/Monca/CaCheChien.jpg";
import caDieuHong from "../assets/Monca/CadieuHong.jpg";
import caKhoTo from "../assets/Monca/CaKhoTo.jpg";
import caRoKho from "../assets/Monca/CARoKho.jpg";
import caThuChien from "../assets/Monca/CaThuChien.jpg";
import chaCaThatLat from "../assets/Monca/ChacaTlt.jpg";
import bongCaiXao from "../assets/MonXao/bong_cai_xao.jpg";
import dauQueXaoToi from "../assets/MonXao/dau-que-xao-toi-.png";
import rauMuongXao from "../assets/MonXao//rau_muong_toi.jpg";
import canhCaiThao from "../assets/Canh/canh_cai_thao.jpg";
import canhChuaCaLoc from "../assets/Canh/canh_chua_ca-.jpg";
import rauDay from "../assets/Canh/canh_rau_day.jpg";
import canhRauMa from "../assets/Canh/canhrauma.jpeg";
import canhSup from "../assets/Canh/canhsup.jpg";
import muc from "../assets/Haisan/Muc.jpg";
import tepRang from "../assets/Haisan/teprang.png";
import tomCang from "../assets/Haisan/TomCang.jpg";
import tomSu from "../assets/Haisan/TomSu.jpg";

export const initListproduct: list[] = [
  // Món Heo
  {
    id: 1,
    masp: "#123",
    tensp: "Sườn Nướng",
    hinhanh: anh1,
    trangthai: "Món Heo",
    gia: "60.000",
  },
  {
    id: 2,
    masp: "#124",
    tensp: "Sườn Bì Chả",
    hinhanh: suonNuong,
    trangthai: "Món Heo",
    gia: "110.000",
  },
  {
    id: 3,
    masp: "#125",
    tensp: "Lạp Xưởng",
    hinhanh: lapXuong,
    trangthai: "Món Heo",
    gia: "85.000",
  },
  {
    id: 4,
    masp: "#126",
    tensp: "Sườn Cây",
    hinhanh: suonCay,
    trangthai: "Món Heo",
    gia: "70.000",
  },
  {
    id: 5,
    masp: "#127",
    tensp: "Sườn Chả",
    hinhanh: suonCha,
    trangthai: "Món Heo",
    gia: "90.000",
  },
  {
    id: 6,
    masp: "#128",
    tensp: "Sườn Bì",
    hinhanh: suonBi,
    trangthai: "Món Heo",
    gia: "80.000",
  },
  {
    id: 7,
    masp: "#129",
    tensp: "Thịt Kho Tiêu",
    hinhanh: thitKhoTieu,
    trangthai: "Món Heo",
    gia: "75.000",
  },
  {
    id: 8,
    masp: "#130",
    tensp: "Thịt Kho Hột Vịt",
    hinhanh: thitKhoHoiVit,
    trangthai: "Món Heo",
    gia: "90.000",
  },
  // Món Gà
  {
    id: 9,
    masp: "#131",
    tensp: "Gà Đùi",
    hinhanh: gaDui,
    trangthai: "Món Gà",
    gia: "125.000",
  },
  {
    id: 10,
    masp: "#132",
    tensp: "Gà Cánh",
    hinhanh: gaCanh,
    trangthai: "Món Gà",
    gia: "130.000",
  },
  {
    id: 11,
    masp: "#133",
    tensp: "Gà Kho Gừng",
    hinhanh: gaKhoGung,
    trangthai: "Món Gà",
    gia: "135.000",
  },
  {
    id: 12,
    masp: "#134",
    tensp: "Gà RoTy",
    hinhanh: gaRoTy,
    trangthai: "Món Gà",
    gia: "140.000",
  },
  {
    id: 13,
    masp: "#135",
    tensp: "Gà Rút Xương",
    hinhanh: gaRutXuong,
    trangthai: "Món Gà",
    gia: "145.000",
  },
  {
    id: 14,
    masp: "#136",
    tensp: "Gà Xào",
    hinhanh: gaXao,
    trangthai: "Món Gà",
    gia: "150.000",
  },
  // Món Cá
  {
    id: 15,
    masp: "#137",
    tensp: "Cá Bống Trứng",
    hinhanh: caBongTrung,
    trangthai: "Món Cá",
    gia: "155.000",
  },
  {
    id: 16,
    masp: "#138",
    tensp: "Cá Cơm Chiên",
    hinhanh: caComChien,
    trangthai: "Món Cá",
    gia: "160.000",
  },
  {
    id: 17,
    masp: "#139",
    tensp: "Cá Chê Chiên",
    hinhanh: caCheChien,
    trangthai: "Món Cá",
    gia: "165.000",
  },
  {
    id: 18,
    masp: "#140",
    tensp: "Cá Diêu Hồng",
    hinhanh: caDieuHong,
    trangthai: "Món Cá",
    gia: "170.000",
  },
  {
    id: 19,
    masp: "#141",
    tensp: "Cá Kho Tộ",
    hinhanh: caKhoTo,
    trangthai: "Món Cá",
    gia: "175.000",
  },
  {
    id: 20,
    masp: "#142",
    tensp: "Cá Rô Kho",
    hinhanh: caRoKho,
    trangthai: "Món Cá",
    gia: "180.000",
  },
  {
    id: 21,
    masp: "#143",
    tensp: "Cá Thu Chiên",
    hinhanh: caThuChien,
    trangthai: "Món Cá",
    gia: "185.000",
  },
  {
    id: 22,
    masp: "#144",
    tensp: "Chả Cá Thát Lát",
    hinhanh: chaCaThatLat,
    trangthai: "Món Cá",
    gia: "190.000",
  },
  // Món Xào
  {
    id: 23,
    masp: "#145",
    tensp: "Bông Cải Xào",
    hinhanh: bongCaiXao,
    trangthai: "Món Xào",
    gia: "195.000",
  },
  {
    id: 24,
    masp: "#146",
    tensp: "Đậu Que Xào Tỏi",
    hinhanh: dauQueXaoToi,
    trangthai: "Món Xào",
    gia: "200.000",
  },
  {
    id: 25,
    masp: "#147",
    tensp: "Rau Muống Xào",
    hinhanh: rauMuongXao,
    trangthai: "Món Xào",
    gia: "205.000",
  },
  // Món Canh
  {
    id: 26,
    masp: "#148",
    tensp: "canh Cải Thảo",
    hinhanh: canhCaiThao,
    trangthai: "Món Canh",
    gia: "210.000",
  },
  {
    id: 27,
    masp: "#149",
    tensp: "Chua Cá Lóc",
    hinhanh: canhChuaCaLoc,
    trangthai: "Món Canh",
    gia: "215.000",
  },
  {
    id: 28,
    masp: "#150",
    tensp: "Rau Đay",
    hinhanh: rauDay,
    trangthai: "Món Canh",
    gia: "220.000",
  },
  {
    id: 29,
    masp: "#151",
    tensp: "Canh Rau Má",
    hinhanh: canhRauMa,
    trangthai: "Món Canh",
    gia: "225.000",
  },
  {
    id: 30,
    masp: "#152",
    tensp: "Canh Sup",
    hinhanh: canhSup,
    trangthai: "Món Canh",
    gia: "230.000",
  },
  // Món Hải Sản
  {
    id: 31,
    masp: "#153",
    tensp: "Mực",
    hinhanh: muc,
    trangthai: "Món Hải Sản",
    gia: "235.000",
  },
  {
    id: 32,
    masp: "#154",
    tensp: "Tép Rang",
    hinhanh: tepRang,
    trangthai: "Món Hải Sản",
    gia: "240.000",
  },
  {
    id: 33,
    masp: "#155",
    tensp: "Tôm Càng",
    hinhanh: tomCang,
    trangthai: "Món Hải Sản",
    gia: "245.000",
  },
  {
    id: 34,
    masp: "#156",
    tensp: "Tôm Sú",
    hinhanh: tomSu,
    trangthai: "Món Hải Sản",
    gia: "250.000",
  },
];

export const card: list[] = [];
