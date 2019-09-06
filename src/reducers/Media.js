import {
  ADD_DOCUMENTS,
  ADD_IMAGES,
  ADD_VIDEOS,
  FETCH_DOCUMENTS,
  FETCH_IMAGES,
  FETCH_VIDEOS
} from '../constants/Media';

const fetchImages = (state) => {
  let clone = Object.assign({}, state);
  clone.images = [{
    'id': 75705,
    'company_service_id': 9,
    'filename': '7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/QraliCbNcwlwFkxQTwJF5X3MrEE7hJEHuEUR3hn6.jpeg',
    'public_url': 'https:\/\/storage.googleapis.com\/skeduler-cloud\/7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/QraliCbNcwlwFkxQTwJF5X3MrEE7hJEHuEUR3hn6.jpeg',
    'module': 'job',
    'module_id': '162',
    'entity': 'job\/images',
    'created_at': '2019-08-28 01:41:40',
    'updated_at': '2019-08-28 01:41:40',
    'description': 'testinger',
    'uploaded_by_user_name': null,
    'uploaded_by_user_id': null
  }, {
    'id': 75706,
    'company_service_id': 9,
    'filename': '7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/mTv0nGJiKydUPnqfQ09H5uD8P9Nj54ZqgxgNoqcb.jpeg',
    'public_url': 'https:\/\/storage.googleapis.com\/skeduler-cloud\/7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/mTv0nGJiKydUPnqfQ09H5uD8P9Nj54ZqgxgNoqcb.jpeg',
    'module': 'job',
    'module_id': '162',
    'entity': 'job\/images',
    'created_at': '2019-08-28 01:41:40',
    'updated_at': '2019-08-28 01:41:40',
    'description': 'testinger',
    'uploaded_by_user_name': null,
    'uploaded_by_user_id': null
  }, {
    'id': 75707,
    'company_service_id': 9,
    'filename': '7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/W2c8XtiCZkvOxPXkX1OXhqBuz3ROVi77WYRIOeGf.jpeg',
    'public_url': 'https:\/\/storage.googleapis.com\/skeduler-cloud\/7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/W2c8XtiCZkvOxPXkX1OXhqBuz3ROVi77WYRIOeGf.jpeg',
    'module': 'job',
    'module_id': '162',
    'entity': 'job\/images',
    'created_at': '2019-08-28 01:41:40',
    'updated_at': '2019-08-28 01:41:40',
    'description': 'testinger',
    'uploaded_by_user_name': null,
    'uploaded_by_user_id': null
  }, {
    'id': 75708,
    'company_service_id': 9,
    'filename': '7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/5BQOWVdvaeaxmuNhKn1yL77KIoOgDEvWjk7FKS16.jpeg',
    'public_url': 'https:\/\/storage.googleapis.com\/skeduler-cloud\/7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/5BQOWVdvaeaxmuNhKn1yL77KIoOgDEvWjk7FKS16.jpeg',
    'module': 'job',
    'module_id': '162',
    'entity': 'job\/images',
    'created_at': '2019-08-28 01:41:40',
    'updated_at': '2019-08-28 01:41:40',
    'description': 'testinger',
    'uploaded_by_user_name': null,
    'uploaded_by_user_id': null
  }, {
    'id': 75704,
    'company_service_id': 9,
    'filename': '7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/rfEi5HaRzKPpVpdHkw6y7LZ6PR7Q2CvkZF4qBfiT.jpeg',
    'public_url': 'https:\/\/storage.googleapis.com\/skeduler-cloud\/7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/rfEi5HaRzKPpVpdHkw6y7LZ6PR7Q2CvkZF4qBfiT.jpeg',
    'module': 'job',
    'module_id': '162',
    'entity': 'job\/images',
    'created_at': '2019-08-28 01:41:39',
    'updated_at': '2019-08-28 01:41:39',
    'description': 'testinger',
    'uploaded_by_user_name': null,
    'uploaded_by_user_id': null
  }, {
    'id': 75702,
    'company_service_id': 9,
    'filename': '7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/Hm9NzyIlvu00npMJ5GCuMpCGOYvgzeGTtiAl6ClL.jpeg',
    'public_url': 'https:\/\/storage.googleapis.com\/skeduler-cloud\/7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/Hm9NzyIlvu00npMJ5GCuMpCGOYvgzeGTtiAl6ClL.jpeg',
    'module': 'job',
    'module_id': '162',
    'entity': 'job\/images',
    'created_at': '2019-08-28 01:41:38',
    'updated_at': '2019-08-28 01:41:38',
    'description': 'testinger',
    'uploaded_by_user_name': null,
    'uploaded_by_user_id': null
  }, {
    'id': 75703,
    'company_service_id': 9,
    'filename': '7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/R7K2oCjAAcFj4zD5cxURVJa7pKRoJ7DCK6nSXHHB.jpeg',
    'public_url': 'https:\/\/storage.googleapis.com\/skeduler-cloud\/7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/R7K2oCjAAcFj4zD5cxURVJa7pKRoJ7DCK6nSXHHB.jpeg',
    'module': 'job',
    'module_id': '162',
    'entity': 'job\/images',
    'created_at': '2019-08-28 01:41:38',
    'updated_at': '2019-08-28 01:41:38',
    'description': 'testinger',
    'uploaded_by_user_name': null,
    'uploaded_by_user_id': null
  }, {
    'id': 75701,
    'company_service_id': 9,
    'filename': '7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/JKmIPkDHq8iWCrKPipGVluCYvzxE3r7gFkn1Ozfd.jpeg',
    'public_url': 'https:\/\/storage.googleapis.com\/skeduler-cloud\/7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/JKmIPkDHq8iWCrKPipGVluCYvzxE3r7gFkn1Ozfd.jpeg',
    'module': 'job',
    'module_id': '162',
    'entity': 'job\/images',
    'created_at': '2019-08-28 01:41:37',
    'updated_at': '2019-08-28 01:41:37',
    'description': 'testinger',
    'uploaded_by_user_name': null,
    'uploaded_by_user_id': null
  }, {
    'id': 75699,
    'company_service_id': 9,
    'filename': '7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/kQ7XN2fLmqvAJfNKda7Itp7mYGa1gr1Cowpkb8ck.jpeg',
    'public_url': 'https:\/\/storage.googleapis.com\/skeduler-cloud\/7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/kQ7XN2fLmqvAJfNKda7Itp7mYGa1gr1Cowpkb8ck.jpeg',
    'module': 'job',
    'module_id': '162',
    'entity': 'job\/images',
    'created_at': '2019-08-28 01:40:44',
    'updated_at': '2019-08-28 01:40:44',
    'description': 'sdfsdfsd',
    'uploaded_by_user_name': null,
    'uploaded_by_user_id': null
  }, {
    'id': 75695,
    'company_service_id': 9,
    'filename': '7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/viQGTlN3dJe1j6fIDZIjtJDrzZzN4ts87MtKgv7l.jpeg',
    'public_url': 'https:\/\/storage.googleapis.com\/skeduler-cloud\/7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/viQGTlN3dJe1j6fIDZIjtJDrzZzN4ts87MtKgv7l.jpeg',
    'module': 'job',
    'module_id': '162',
    'entity': 'job\/images',
    'created_at': '2019-08-28 01:40:12',
    'updated_at': '2019-08-28 01:40:12',
    'description': 'test',
    'uploaded_by_user_name': null,
    'uploaded_by_user_id': null
  }];
  return clone;
};

const fetchVideos = (state) => {
  let clone = Object.assign({}, state);
  clone.videos = [
    {
      'id': 1157,
      'vimeo_company_id': 6,
      'vimeo_uri': '\/videos\/358222259',
      'job_id': '162',
      'vimeo_embed_html': '<iframe src=\'https:\/\/player.vimeo.com\/video\/358222259?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=135984\' width=\'400\' height=\'300\' frameborder=\'0\' allow=\'autoplay; fullscreen\' allowfullscreen title=\'Garret Baumbach\'><\/iframe>',
      'upload_status': 'complete',
      'title': 'Garret Baumbach',
      'description': 'est ut ab',
      'upload_link': 'https:\/\/files.tus.vimeo.com\/files\/vimeo-prod-src-tus-asia\/2ae48134e32530b922134ca98a208ca3',
      'user': 'Steve',
      'thumbnail': 'https:\/\/i.vimeocdn.com\/video\/default_100x75?r=pad',
      'created_at': '2019-09-06 03:58:45',
      'updated_at': '2019-09-06 03:59:02',
      'link': 'https:\/\/vimeo.com\/358222259\/9d7388ad55'
    },
    {
      'id': 1158,
      'vimeo_company_id': 7,
      'vimeo_uri': '\/videos\/358222259',
      'job_id': '162',
      'vimeo_embed_html': '<iframe src=\'https:\/\/player.vimeo.com\/video\/358222259?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=135984\' width=\'400\' height=\'300\' frameborder=\'0\' allow=\'autoplay; fullscreen\' allowfullscreen title=\'Garret Baumbach\'><\/iframe>',
      'upload_status': 'complete',
      'title': 'Garret Baumbach',
      'description': 'est ut ab',
      'upload_link': 'https:\/\/files.tus.vimeo.com\/files\/vimeo-prod-src-tus-asia\/2ae48134e32530b922134ca98a208ca3',
      'user': 'Steve',
      'thumbnail': 'https:\/\/i.vimeocdn.com\/video\/default_100x75?r=pad',
      'created_at': '2019-09-06 03:58:45',
      'updated_at': '2019-09-06 03:59:02',
      'link': 'https:\/\/vimeo.com\/358222259\/9d7388ad55'
    },
    {
      'id': 119,
      'vimeo_company_id': 7,
      'vimeo_uri': '\/videos\/358222259',
      'job_id': '162',
      'vimeo_embed_html': '<iframe src=\'https:\/\/player.vimeo.com\/video\/358222259?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=135984\' width=\'400\' height=\'300\' frameborder=\'0\' allow=\'autoplay; fullscreen\' allowfullscreen title=\'Garret Baumbach\'><\/iframe>',
      'upload_status': 'complete',
      'title': 'Garret Baumbach',
      'description': 'est ut ab',
      'upload_link': 'https:\/\/files.tus.vimeo.com\/files\/vimeo-prod-src-tus-asia\/2ae48134e32530b922134ca98a208ca3',
      'user': 'Steve',
      'thumbnail': 'https:\/\/i.vimeocdn.com\/video\/default_100x75?r=pad',
      'created_at': '2019-09-06 03:58:45',
      'updated_at': '2019-09-06 03:59:02',
      'link': 'https:\/\/vimeo.com\/358222259\/9d7388ad55'
    },
    {
      'id': 1159,
      'vimeo_company_id': 7,
      'vimeo_uri': '\/videos\/358222259',
      'job_id': '162',
      'vimeo_embed_html': '<iframe src=\'https:\/\/player.vimeo.com\/video\/358222259?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=135984\' width=\'400\' height=\'300\' frameborder=\'0\' allow=\'autoplay; fullscreen\' allowfullscreen title=\'Garret Baumbach\'><\/iframe>',
      'upload_status': 'complete',
      'title': 'Garret Baumbach',
      'description': 'est ut ab',
      'upload_link': 'https:\/\/files.tus.vimeo.com\/files\/vimeo-prod-src-tus-asia\/2ae48134e32530b922134ca98a208ca3',
      'user': 'Steve',
      'thumbnail': 'https:\/\/i.vimeocdn.com\/video\/default_100x75?r=pad',
      'created_at': '2019-09-06 03:58:45',
      'updated_at': '2019-09-06 03:59:02',
      'link': 'https:\/\/vimeo.com\/358222259\/9d7388ad55'
    },
    {
      'id': 1160,
      'vimeo_company_id': 7,
      'vimeo_uri': '\/videos\/358222259',
      'job_id': '162',
      'vimeo_embed_html': '<iframe src=\'https:\/\/player.vimeo.com\/video\/358222259?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=135984\' width=\'400\' height=\'300\' frameborder=\'0\' allow=\'autoplay; fullscreen\' allowfullscreen title=\'Garret Baumbach\'><\/iframe>',
      'upload_status': 'complete',
      'title': 'Garret Baumbach',
      'description': 'est ut ab',
      'upload_link': 'https:\/\/files.tus.vimeo.com\/files\/vimeo-prod-src-tus-asia\/2ae48134e32530b922134ca98a208ca3',
      'user': 'Steve',
      'thumbnail': 'https:\/\/i.vimeocdn.com\/video\/default_100x75?r=pad',
      'created_at': '2019-09-06 03:58:45',
      'updated_at': '2019-09-06 03:59:02',
      'link': 'https:\/\/vimeo.com\/358222259\/9d7388ad55'
    }
  ];
  return clone;
};

const fetchDocuments = (state) => {
  let clone = Object.assign({}, state);
  clone.documents = [
    {
      'id': 81615,
      'company_service_id': 9,
      'filename': '7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/RzT1PJPVykB7iw0xHZ5MOUtY9f3X2lXDSirVLO2d.pdf',
      'public_url': 'https:\/\/storage.googleapis.com\/skeduler-cloud\/7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/RzT1PJPVykB7iw0xHZ5MOUtY9f3X2lXDSirVLO2d.pdf',
      'module': 'job',
      'module_id': '162',
      'entity': 'job\/pdf',
      'created_at': '2019-09-06 03:56:36',
      'updated_at': '2019-09-06 03:56:36',
      'description': 'asdfasf',
      'uploaded_by_user_name': null,
      'uploaded_by_user_id': null
    },
    {
      'id': 81616,
      'company_service_id': 9,
      'filename': '7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/RzT1PJPVykB7iw0xHZ5MOUtY9f3X2lXDSirVLO2d.pdf',
      'public_url': 'https:\/\/storage.googleapis.com\/skeduler-cloud\/7d85980a-a897-5300-9c2d-12e4e04518d8\/job\/162\/RzT1PJPVykB7iw0xHZ5MOUtY9f3X2lXDSirVLO2d.pdf',
      'module': 'job',
      'module_id': '162',
      'entity': 'job\/pdf',
      'created_at': '2019-09-06 03:56:36',
      'updated_at': '2019-09-06 03:56:36',
      'description': 'asdfasf',
      'uploaded_by_user_name': null,
      'uploaded_by_user_id': null
    }
  ];
  return clone;
};

export default (
  state = {
    images: [],
    videos: [],
    documents: []
  },
  action) => {
  switch (action.type) {
    case FETCH_DOCUMENTS:
      return fetchImages(state);
    case FETCH_IMAGES:
      return fetchVideos(state);
    case FETCH_VIDEOS:
      return fetchDocuments(state);

    case ADD_DOCUMENTS:
      return state;
    case ADD_IMAGES:
      return state;
    case ADD_VIDEOS:
      return state;
    default:
      return state;
  }
};
