# Doctor Who

- https://en.wikipedia.org/wiki/List_of_Doctor_Who_episodes_(2005%E2%80%93present)
- https://www.bbc.co.uk/programmes/b006q2x0
- https://www.imdb.com/title/tt0436992/episodes/
- https://www.doctorwho.tv/
- https://tardis.fandom.com/wiki/Doctor_Who
- https://archive.org/details/doctor-who_202210/S01E01+-+An+Unearthly+Child.mkv
- API
  - https://github.com/markduwe/doctorwho 复杂的JSON数据
  - https://github.com/Ido-Barnea/Doctor-Who-API/tree/master/data
  - https://phoenixjaymes.com/lab/r-doctorwho-api/
  - https://api.catalogopolis.xyz/docs/
- https://codepen.io/Gerwinnz/pen/Degwqy 旋转的 Tardis

Whoniverse

我的目的是什么？

- 专注于新版DoctorWho
- 帮助自己理清剧情走势
- 顺便向别人介绍这部剧

备忘：

- 直接在页面上加上我的中译英 review
- 暂时不考虑加图片，或者只使用一张图片

tardis icon from https://www.flaticon.com/free-icon/tardis_1601066?related_id=1600893&origin=search

tailwindcss color generator https://tailwind-generator.com/color-palette-generator/generator

## Steps

### 1. 选择 API 格式

```json
[
{
    "id": 40,
    "episode_title": "The Power of the Doctor",
    "doctor_actor": "Jodie Whittaker",
    "companion": "Yasmin Khan, Dan Lewis",
    "summary": "The Doctor's final adventure leads to a confrontation with the Master and a dramatic regeneration.",
    "air_date": "2022-10-23"
  }
]
```

`air_date` 指在 UK 本土首映的时间

还需要加上圣诞特辑、50周年、60周年庆

summary from https://www.imdb.com/title/tt0436992/episodes/

---

Other data:

- https://shermansplanet.com/gallifreyan/
- https://rossjrw.com/gallifreyo/
- https://github.com/rossjrw/gallifreyo
