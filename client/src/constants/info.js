export const typeList = ["mamm", "bird", "insect", "plant", "fungi"];

export const info = {
  mamm: {
    id: "anmlSpecsId",
    name: "anmlGnrlNm",
    kor: "포유류",
  },
  bird: {
    id: "anmlSpecsId",
    name: "anmlGnrlNm",
    kor: "조류",
  },
  insect: {
    id: "insctPilbkNo",
    name: "insctOfnmKrlngNm",
    kor: "곤충",
  },
  plant: {
    id: "plantPilbkNo",
    name: "plantGnrlNm",
    kor: "식물",
  },
  fungi: {
    id: "fngsPilbkNo",
    name: "fngsGnrlNm",
    kor: "버섯",
  },
};

export const description = {
  mamm: "포유류, 포유동물은 척삭동물문의 강인 포유강에 속하는 동물을 통틀어 부르는 말이다. 암컷에게는 새끼에게 양분을 공급할 젖을 만들어내는 유선이 있다. 대부분 몸에 털이 나 있고, 털이 변형된 비늘이나 가시가 있는 것들도 있다. 뇌에서 체온과 혈액 순환을 조절하는 온혈동물이다.",
  bird: "새 또는 조류는 백악기 대멸종에서 살아남은 수각류 공룡을 의미한다. 또한 조류는 보통 비행이 가능하며, 계통적으로는 석형강 공룡상목 ‘조강’에 속한다. 새는 포유류와 마찬가지로 심장이 2심방, 2심실이며, 허파로 호흡하는 항온동물이다. 조류는 ‘날짐승’이라고도 한다.",
  insect:
    "곤충은 절지동물문 곤충강에 속하는 동물이다. 분류학적으로는 곤충강에 묶여있다. 몸의 마디는 크게 머리, 가슴, 배로 나뉘며 다리는 가슴부위에 6개가 달려있다. 간혹 퇴화하여 다리가 4개인 것들도 있다. 이 때문에 최근에는 곤충을 육각아문으로 분류하기도 한다.",
  plant:
    "지구상의 생물계를 동물-식물-균류로 크게나누면 이들 중 세포벽이 있고 엽록소가 있어 독립영양으로 광합성을 하는 생물을 말한다. 또한 이동운동을 하지 않는 특징이 있다.",
  fungi:
    "균류들은 균사라고 불리는 실과 같은 형태의 길게 연결된 세포들로 그 몸체를 이루고 식물에서의 잎과 줄기 뿌리와 같은 역할을 한다. 이 균사는 엽록소가 없어 스스로 영양분을 만들 수 없으며 다른 유기물을 분해하거나 기생 또는 공생을 통해 영양분을 흡수하여 생장한다.",
};

export const detailInfo = {
  mamm: {
    문명: ["anmlPhlmKorNm", "anmlPhlmEngNm"],
    강명: ["anmlClsKorNm", "anmlClsEngNm"],
    목명: ["anmlOrdKorNm", "anmlOrdEngNm"],
    과명: ["anmlFmlyKorNm", "anmlFmlyEngNm"],
    속명: ["anmlGenusKorNm", "anmlGenusEngNm"],
    국명: ["anmlGnrlNm"],
    학명: ["anmlScnm"],
    생태: ["eclgDpftrCont"],
    일반특징: ["gnrlSpftrCont"],
  },
  bird: {
    문명: ["anmlPhlmKorNm", "anmlPhlmEngNm"],
    강명: ["anmlClsKorNm", "anmlClsEngNm"],
    목명: ["anmlOrdKorNm", "anmlOrdEngNm"],
    과명: ["anmlFmlyKorNm", "anmlFmlyEngNm"],
    속명: ["anmlGenusKorNm", "anmlGenusEngNm"],
    국명: ["anmlGnrlNm"],
    학명: ["anmlScnm"],
    생태: ["eclgDpftrCont"],
    일반특징: ["gnrlSpftrCont"],
  },
  insect: {
    목명: ["ordKorNm", "ordNm"],
    과명: ["familyKorNm", "familyNm"],
    속명: ["genusKorNm", "genusNm"],
    종소명: ["insctSpecsNm"],
    명명자명: ["insctAthrNm"],
    국명: ["insctOfnmKrlngNm"],
    학명: ["btnc"],
    영문명: ["insctEngNm"],
    생태: ["cont7"],
    습성: ["cont8"],
    일반특징: ["cont1"],
    유충: ["cont5"],
    출현시기: ["emrgcEraDscrt"],
  },
  plant: {
    과명: ["familyKorNm", "familyNm"],
    속명: ["genusKorNm", "genusNm"],
    국명: ["plantGnrlNm"],
    학명: ["plantSpecsScnm"],
    영문명: ["engNm"],
    형태: ["shpe"],
    크기: ["sz"],
    가지: ["branchDesc"],
    줄기: ["stemDesc"],
    열매: ["fritDesc"],
    잎: ["leafDesc"],
    번식방법: ["brdMthdDesc"],
    생육환경: ["grwEvrntDesc"],
    재배특성: ["farmSpftDesc"],
    병충해: ["bugInfo"],
    분포: ["dstrb"],
    원산지: ["orplcNm"],
    사용법: ["useMthdDesc"],
    유사식물: ["smlrPlntDesc"],
  },
  fungi: {
    과명: ["familyKorNm", "familyNm"],
    속명: ["genusKorNm", "genusNm"],
    종소명: ["fngsTtnm"],
    국명: ["fngsGnrlNm"],
    학명: ["fngsScnm"],
    포자: ["포자특징"],
    자실체형태: ["cont1"],
    발생장소: ["발생장소"],
    발생계절: ["occrrSsnNm"],
    식독여부: ["cont12"],
  },
};
