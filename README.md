# maraoz.github.io
My personal site

## How to add language picker to a blog post

1. Create a Spanish version and a Chinese version of blogs. And rename them: add postfix "-es" for Spanish, "-zh" for Chinese. Following is an example.

- Origin blog post: 
>      2019-02-11-digital-life.md

- Changed to:
>      2019-02-11-digital-life.md
>      2019-02-11-digital-life-es.md
>      2019-02-11-digital-life-zh.md

2. Add language type into the renamed blog posts. If you open a blog, you can see following code let at the top of page.

    
>     ---
>     layout: post
>     title:  "Designing Digital Life and Death"
>     ...
>     ---
  Add `lang` line between `---` lines

>     ---
>     layout: post
>     title:  "Designing Digital Life and Death"
>     ...
>     lang: LANGULAGE_CODE
>     ---  

  Where `LANGUAGE_CODE` is available one of the following:

| Code | Description |
| ---- | ----------- |
| "en" | English |
| "es" | Spanish |
| "zh" | Chinese |
