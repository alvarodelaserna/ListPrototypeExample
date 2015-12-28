package com.example.alvarodelaserna.recyclerviewexample;

/**
 * Created by alvaro.delaserna on 28/12/15.
 */
public class FeedItem {
    private String title;
    private String url;
    private String thumbnail;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
}
