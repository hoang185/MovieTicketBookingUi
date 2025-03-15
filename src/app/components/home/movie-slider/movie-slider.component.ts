import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-slider',
  standalone: false,
  templateUrl: './movie-slider.component.html',
  styleUrl: './movie-slider.component.scss'
})
export class MovieSliderComponent {
  movies = [
    {
      title: 'Mickey 17',
      imageUrl: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/3/5/350x495-mickey.jpg',
      ageRating: 'T18',
      sneakShow: true
    },
    {
      title: 'Quỷ Nhập Tràng',
      imageUrl: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/q/u/qu_nh_p_tr_ng_-_payoff_poster_-_kc_07032025_1_.jpg',
      ageRating: 'T18',
      sneakShow: false
    },
    {
      title: 'Sát Thủ Vô Cùng Cực Hại',
      imageUrl: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/h/i/hit2-dub_poster-layered.jpg',
      ageRating: 'T16',
      sneakShow: true
    },
    {
      title: 'Anh Không Đau',
      imageUrl: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/n/v/nvc_safeglass_470x700.jpg',
      ageRating: 'T18',
      sneakShow: true
    },
    {
      title: 'Mickey 1788',
      imageUrl: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/3/5/350x495-mickey.jpg',
      ageRating: 'T18',
      sneakShow: true
    },
    {
      title: 'Quỷ Nhập Tràng 2',
      imageUrl: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/q/u/qu_nh_p_tr_ng_-_payoff_poster_-_kc_07032025_1_.jpg',
      ageRating: 'T18',
      sneakShow: false
    },
    {
      title: 'Sát Thủ Vô Cùng Cực Hại 2',
      imageUrl: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/h/i/hit2-dub_poster-layered.jpg',
      ageRating: 'T16',
      sneakShow: true
    },
    {
      title: 'Anh Không Đau 2',
      imageUrl: 'https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/n/v/nvc_safeglass_470x700.jpg',
      ageRating: 'T18',
      sneakShow: true
    }
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button class="slick-prev">‹</button>',
    nextArrow: '<button class="slick-next">›</button>',
  };

  viewDetails(movie: any) {
    const ad = 6;
    console.log(`Xem chi tiết: ${movie.title}`);
  }

  buyTicket(movie: any) {
    console.log(`Mua vé: ${movie.title}`);
  }
}
