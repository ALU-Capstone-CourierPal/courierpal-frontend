// check location and return image url

export const checkLocation = (location, type) => {
  // cities and images
  // US = https://res.cloudinary.com/dpnbddror/image/upload/v1649143955/courier-pal/USA_predefined_kxhwz6.webp
  // Uganda = https://res.cloudinary.com/dpnbddror/image/upload/v1649143900/courier-pal/Uganda_predefine_tadekg.webp
  // Tanzania = https://res.cloudinary.com/dpnbddror/image/upload/v1649143869/courier-pal/tanzania_Predefine_gqlyja.webp
  // South Africa = https://res.cloudinary.com/dpnbddror/image/upload/v1649143835/courier-pal/south_Africa_Predefine_uuurlh.webp
  // Sierra Leone = https://res.cloudinary.com/dpnbddror/image/upload/v1649143800/courier-pal/Sierra_Leone_predefine_rrsqnh.webp
  // Nigeria = https://res.cloudinary.com/dpnbddror/image/upload/v1649143764/courier-pal/Nigeria_mmgknp.webp
  // UK = https://res.cloudinary.com/dpnbddror/image/upload/v1649143757/courier-pal/London_cgodld.webp
  // Kenya = https://res.cloudinary.com/dpnbddror/image/upload/v1649143751/courier-pal/Kenya_Predefine_hakysf.webp
  // Ghana = https://res.cloudinary.com/dpnbddror/image/upload/v1649143741/courier-pal/Ghana_Predefine_up33og.webp
  // Botswana = https://res.cloudinary.com/dpnbddror/image/upload/v1649143741/courier-pal/botswana_bga8gk.webp

  // cities and banners
  // US = https://res.cloudinary.com/dpnbddror/image/upload/v1649143936/courier-pal/USA_banner_om4iks.webp
  // Uganda = https://res.cloudinary.com/dpnbddror/image/upload/v1649143884/courier-pal/Uganda_banner_nsuffy.webp
  // Tanzania = https://res.cloudinary.com/dpnbddror/image/upload/v1649143855/courier-pal/Tanzania_banner_hpwg9k.webp
  // South Africa = https://res.cloudinary.com/dpnbddror/image/upload/v1649143815/courier-pal/south_Africa_banner_rwlpsf.webp
  // Sierra Leone = https://res.cloudinary.com/dpnbddror/image/upload/v1649143786/courier-pal/Sierra_Leone_img_banner_vkgc6z.webp
  // Nigeria = https://res.cloudinary.com/dpnbddror/image/upload/v1649143773/courier-pal/Nigeria_banner_wo9bqt.webp
  // UK = https://res.cloudinary.com/dpnbddror/image/upload/v1649143918/courier-pal/UK_banner_pxu90s.webp
  // Kenya = https://res.cloudinary.com/dpnbddror/image/upload/v1649143746/courier-pal/Kenya_img_banner_tlwhvh.webp
  // Ghana = https://res.cloudinary.com/dpnbddror/image/upload/v1649143741/courier-pal/Ghana_banner_ylgwi0.webp
  // Botswana = https://res.cloudinary.com/dpnbddror/image/upload/v1649143741/courier-pal/botswana_banner_gig935.webp

  // check type and location and return image url
  if (type === 'cities') {
    if (location === 'US') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143955/courier-pal/USA_predefined_kxhwz6.webp';
    } else if (location === 'Uganda') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143900/courier-pal/Uganda_predefine_tadekg.webp';
    } else if (location === 'Tanzania') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143869/courier-pal/tanzania_Predefine_gqlyja.webp';
    } else if (location === 'South Africa') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143835/courier-pal/south_Africa_Predefine_uuurlh.webp';
    } else if (location === 'Sierra Leone') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143800/courier-pal/Sierra_Leone_predefine_rrsqnh.webp';
    } else if (location === 'Nigeria') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143764/courier-pal/Nigeria_mmgknp.webp';
    } else if (location === 'UK') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143757/courier-pal/London_cgodld.webp';
    } else if (location === 'Kenya') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143751/courier-pal/Kenya_Predefine_hakysf.webp';
    } else if (location === 'Ghana') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143741/courier-pal/Ghana_Predefine_up33og.webp';
    } else if (location === 'Botswana') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143741/courier-pal/botswana_bga8gk.webp';
    }
  } else {
    if (location === 'US') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143936/courier-pal/USA_banner_om4iks.webp';
    } else if (location === 'Uganda') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143884/courier-pal/Uganda_banner_nsuffy.webp';
    } else if (location === 'Tanzania') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143855/courier-pal/Tanzania_banner_hpwg9k.webp';
    } else if (location === 'South Africa') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143815/courier-pal/south_Africa_banner_rwlpsf.webp';
    } else if (location === 'Sierra Leone') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143786/courier-pal/Sierra_Leone_img_banner_vkgc6z.webp';
    } else if (location === 'Nigeria') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143773/courier-pal/Nigeria_banner_wo9bqt.webp';
    } else if (location === 'UK') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143918/courier-pal/UK_banner_pxu90s.webp';
    } else if (location === 'Kenya') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143746/courier-pal/Kenya';
    } else if (location === 'Ghana') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143741/courier-pal/Ghana_banner_ylgwi0.webp';
    } else if (location === 'Botswana') {
      return 'https://res.cloudinary.com/dpnbddror/image/upload/v1649143741/courier-pal/botswana_banner_gig935.webp';
    }
  }
};
