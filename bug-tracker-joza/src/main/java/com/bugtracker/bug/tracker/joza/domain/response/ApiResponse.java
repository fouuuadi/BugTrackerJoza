package com.bugtracker.bug.tracker.joza.domain.response;

public class ApiResponse<T> {

    private int statusCode;


    private String error;

    private String warning;

    private T content;

    public ApiResponse() {
    }

    public ApiResponse(String error, String warning, T content, int statusCode) {
        this.error = error;
        this.warning = warning;
        this.content = content;
        this.statusCode = statusCode;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getWarning() {
        return warning;
    }

    public void setWarning(String warning) {
        this.warning = warning;
    }

    public T getContent() {
        return content;
    }

    public void setContent(T content) {
        this.content = content;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }
}
