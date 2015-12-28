package com.example.alvarodelaserna.recyclerviewexample;

import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

/**
 * Created by alvaro.delaserna on 28/12/15.
 */
public class CustomViewHolder extends RecyclerView.ViewHolder {
    protected ImageView imageView;
    protected TextView title, url;

    public CustomViewHolder(View view) {
        super(view);
        this.imageView = (ImageView) view.findViewById(R.id.thumbnail);
        this.title = (TextView) view.findViewById(R.id.title);
        this.url = (TextView) view.findViewById(R.id.url);
    }
}
